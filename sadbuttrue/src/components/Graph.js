import React from 'react';
import {LineChart} from "react-native-chart-kit";
import {View, Text, Dimensions} from "react-native";
import Styles from '../Styles'


export const Graph  = () => {

    return (
        <View style={Styles.centerView}>
            <LineChart
                data={{
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            data: [5, 7, 10, 3, 15, 6, 11.6]
                        }
                    ]
                }}
                textStyle={{fontFamily: "EuclidFlex-Bold"}}
                width={Dimensions.get("window").width} // from react-native
                height={250}
                yAxisLabel={"€"}
                chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 20) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "2",
                        strokeWidth: "3",
                        stroke: "black"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    marginRight: 20,
                    borderRadius: 16,
                }}
            />
        </View>
    )
};
