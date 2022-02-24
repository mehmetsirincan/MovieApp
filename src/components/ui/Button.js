import { useColorScheme, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Const';

export default function Button(props) {

  const scheme = useColorScheme();

  const containerShadow = scheme == 'dark' ? {} : {
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }

  return (
    <TouchableOpacity
    style={{
        backgroundColor:scheme == 'dark' ? COLORS.PrimaryLight : '#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center',
        ...containerShadow,
        ...props?.style
    }}
    {...props?.options}
    >

    {props.children}

    </TouchableOpacity>
  )
}