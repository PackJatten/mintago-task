export type TLineData = {
  data: any;
  stroke: string | undefined;
  name: string | number;
  className?: string;
};
export type TSeriesData = {
  data: TLineData[];
  name: string;
  stroke: string;
  className?: string;
};
export type TPensionGraph = { data: TLineData[] };
