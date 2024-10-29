import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
// Example icons from react-icons

// Sample data

const PensionGraph: React.FC = (props) => {
  const { data, retirementAge } = props;
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={'100%'}>
      <LineChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="value" />
        <XAxis dataKey="name" type="category" allowDuplicatedCategory={false} />

        <Tooltip />
        <Legend />
        {data.map((s) => (
          <Line
            data={s.data}
            dataKey="value"
            name={s.name}
            stroke={s.stroke}
            key={s.name}
            className={s.className}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PensionGraph;
