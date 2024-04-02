
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function GraphicData ({data, dataKeyX, dataKey1, dataKey2, dataKey3}){
    return (
        <ResponsiveContainer width="100%" height="60%" >
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={dataKeyX} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey={dataKey1} stroke="#8884d8"  dot={{ r: 1 }} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d"  dot={{ r: 1 }} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey={dataKey3} stroke="#82ca9d"  dot={{ r: 1 }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer> 
    )
    
}

export default GraphicData;