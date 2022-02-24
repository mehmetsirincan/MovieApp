import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { ArrowDown } from '../../icons'
import { COLORS, FONTS } from '../../Const'
import { useDisclose,Actionsheet  } from "native-base";

export default function SelectBox({selectData,defaultValue}) {
    const [openActionSheet,setOpenActionSheet] = useState(false);
    const [selectedItem,setSelectedItem] = useState({});

  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=>setOpenActionSheet(true)}>
      <Text style={styles.selectText}>{selectedItem?.name ? selectedItem?.name :  defaultValue}</Text>
      <ArrowDown width={10} height={8} fill={COLORS.DarkGray} />
    </TouchableOpacity>

    <Actionsheet isOpen={openActionSheet} onClose={()=>setOpenActionSheet(false)}>
    <Actionsheet.Content>
        {selectData?.length > 0 &&
            selectData?.map(e=>
                <Actionsheet.Item style={{fontFamily:selectedItem?.id == e.id ? FONTS.Bold : FONTS.Regular}} key={e.id} onPress={()=>{setSelectedItem(e),setOpenActionSheet(false)}}>{e.name}</Actionsheet.Item>
            )
        }
    </Actionsheet.Content>
    </Actionsheet>
    </>
  )
}

const styles = StyleSheet.create(
    {
        selectText : {
            fontSize:16,
            lineHeight:16,
            fontFamily : FONTS.SemiBold,
            color: COLORS.DarkGray,
        },
        container : {
            flexDirection :'row',
            backgroundColor :'#DDDDDD',
            borderRadius :22,
            paddingVertical : 17,
            paddingHorizontal : 24,
            alignItems :'center',
            justifyContent: 'space-between',
        }
    }
)