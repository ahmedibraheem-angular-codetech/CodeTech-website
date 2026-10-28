import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../divider/divider.component';
import { TechnologyTool } from './technologies-section.model';

interface TechSlot {
  col: number;
  row: number;
}

interface TechCell {
  id: string;
  col: number;
  row: number;
  tool?: TechnologyTool;
  delay: string;
  duration: string;
}

/** Filled positions match the scattered tools grid. */
const TOOL_SLOTS: TechSlot[] = [
  { col: 3, row: 1 },
  { col: 4, row: 1 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
  { col: 4, row: 2 },
  { col: 2, row: 3 },
  { col: 3, row: 3 },
  { col: 1, row: 4 },
  { col: 3, row: 4 },
];

const EMPTY_SLOTS: TechSlot[] = [
  { col: 2, row: 1 },
  { col: 5, row: 1 },
  { col: 5, row: 2 },
  { col: 1, row: 3 },
  { col: 4, row: 3 },
  { col: 2, row: 4 },
  { col: 4, row: 4 },
];

const FLOAT_DELAYS = ['0s', '0.4s', '0.85s', '0.2s', '0.65s', '1.05s', '0.3s', '0.75s', '1.15s'];
const FLOAT_DURATIONS = ['3.2s', '3.8s', '3.5s', '4.1s', '3.4s', '3.9s', '3.1s', '3.7s', '4.2s'];

@Component({
  selector: 'ct-technologies-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<string[]>([]);
  readonly tools = input<TechnologyTool[]>([]);

  readonly cells = computed<TechCell[]>(() => {
    const tools = this.tools();
    const usedSlots = TOOL_SLOTS.slice(0, tools.length);
    const maxRow = usedSlots.reduce((row, slot) => Math.max(row, slot.row), 1);

    const filled: TechCell[] = usedSlots.map((slot, index) => ({
      id: `${tools[index].id}-${index}`,
      col: slot.col,
      row: slot.row,
      tool: tools[index],
      delay: FLOAT_DELAYS[index % FLOAT_DELAYS.length],
      duration: FLOAT_DURATIONS[index % FLOAT_DURATIONS.length],
    }));

    const empties: TechCell[] = EMPTY_SLOTS.filter((slot) => slot.row <= maxRow).map(
      (slot) => ({
        id: `gap-${slot.col}-${slot.row}`,
        col: slot.col,
        row: slot.row,
        delay: '0s',
        duration: '0s',
      }),
    );

    return [...filled, ...empties];
  });
}
