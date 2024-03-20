import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 80, "chemistry": 85 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 95 },
        { "id": 4, "name": "David", "math": 68, "physics": 59, "chemistry": 72 },
        { "id": 5, "name": "Emily", "math": 75, "physics": 80, "chemistry": 80 },
        { "id": 6, "name": "Frank", "math": 88, "physics": 85, "chemistry": 92 },
        { "id": 7, "name": "Grace", "math": 70, "physics": 75, "chemistry": 75 },
        { "id": 8, "name": "Hannah", "math": 82, "physics": 78, "chemistry": 88 },
        { "id": 9, "name": "Isaac", "math": 95, "physics": 100, "chemistry": 98 },
        { "id": 10, "name": "Jack", "math": 79, "physics": 75, "chemistry": 84 }
      ]
      
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;