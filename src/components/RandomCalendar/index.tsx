import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns"; // biblioteca para tratamento de dados

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1); // subtrai 1 ano
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          // receber props por padrão
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5} // tamanho do square do calendar
          classForValue={(item: HeatmapValue) => {
            // para cada item será executada uma função
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`;
          }} // estilizar cada square de acordo com o número de contribuições
          showWeekdayLabels
        />
      </div>

      <span>This is a Random Calendar, don't represent actual data</span>
    </Container>
  );
};

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;

  // enquanto o dia atual for antes do ultimo dia
  // ou se chegar no ultimo dia, o loop continuará
  // após chegar no ultimo dia, o loop irá parar
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

export default RandomCalendar;
