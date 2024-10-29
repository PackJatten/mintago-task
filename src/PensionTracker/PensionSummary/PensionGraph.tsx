import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
import { TPensionGraph } from './index.types';

const PensionGraph = (props: TPensionGraph) => {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height={'100%'}>
      <LineChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="value" />
        <XAxis dataKey="name" type="category" allowDuplicatedCategory={false} />
        <Tooltip />
        <Legend />
        {data.map((lineData) => (
          <Line
            data={lineData.data}
            dataKey="value"
            stroke={lineData.stroke}
            key={lineData.name}
            className={lineData.className}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PensionGraph;
