import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const { wrapper, container, tempStyle, feels, highLow, highLowWrapper, bodyWrapper, description, message, mainTempWrapper, withinBodyWrapper } = styles;
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
  const weatherCondition = weather[0]?.main;
  
  return (
    <SafeAreaView style={ [wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }] }>
      <View style={ container }>
        <View style= { mainTempWrapper }>
          <Feather
            name={ weatherType[weatherCondition]?.icon }
            size={ 100 }
            color={ weatherType[weatherCondition]?.backgrounColor !== "#ffff00" ? 'black' : 'white' } />
          <Text style={ tempStyle }>{ temp } °C</Text>
        </View>
        <Text style={ feels }>Feels like { feels_like } °C</Text>
        <RowText
          messageOne={ `High: ${temp_max} °C ` }
          messageTwo={ `Low: ${temp_min} °C` }
          containerStyles={ highLowWrapper }
          messageOneStyles={ highLow }
          messageTwoStyles={ highLow } />
      </View>
      <View style= { withinBodyWrapper }>
        <RowText
          messageOne={ weather[0]?.description }
          messageTwo={ weatherType[weather[0]?.main]['message'] }
          containerStyles={ bodyWrapper }
          messageOneStyles={ description }
          messageTwoStyles={ message } />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTempWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 40,
  },
  tempStyle: {
    fontSize: 43,
    color: 'black',
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    fontSize: 20,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  withinBodyWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 48,
    color: 'black',
  },
  message: {
    fontSize: 30,
    color: 'black',
  },
}
);

export default CurrentWeather;