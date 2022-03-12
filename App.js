import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ansList, setansList] = useState(
    {
      A1: "",
      A2: "",
      A3: "",
      A4: 0,
      A5: 0,
      A6: 2,
      A7: 0,
      A8: 4,
      A9: 2,
      Af: 2,
    }
  );
 
const [Navi,setNavi]=useState([
  [0,"MakeKit_Tent"],
  [1,"MakeKit_Tarp"],
  [2,"MakeKit_Tarp_NoCar"],
  [3,"MakeKit_Mat"],
  [4,"MakeKit_Table"],
  [5,"MakeKit_Chair"],
  [6,"MakeKit_Heater_Energy"],
  [7,"MakeKit_Heater_NoEnergy"],
  [8,"MakeKit_Cooler_Energy"],
  [9,"MakeKit_Cooler_NoEnergy"],
  [10,"MakeKit_Etc"],
  [11,"MakeKit_Kitc"],
  [12,"MakeKit_Setiment"],
  [13,"MakeKit_Box"],
  ]);
  
/*
  const [Navi,setNavi]=useState([
    
    { id:0,                          //0
      name:"MakeKit_Tent"},
    {id:1,
      name:"MakeKit_Tarp"},          //1
    {id:2,
      name:"MakeKit_Tarp_NoCar"},    //2
    {id:3,
      name:"MakeKit_Mat"},           // 3
    {id:4,
      name:"MakeKit_Table"},         // 4
    {id:5,
      name:"MakeKit_Chair"},         // 5
    {id:6,
      name:"MakeKit_Heater_Energy"},  // 6
    {id:7,
      name:"MakeKit_Heater_NoEnergy"}, // 7
    {id:8,
      name:"MakeKit_Cooler_Energy"},  // 8
    {id:9,
      name:"MakeKit_Cooler_NoEnergy"}, //9
    {id:10,
      name:"MakeKit_Etc"},             //10
    {id:11,
      name:"MakeKit_Kitc"},            //11
    {id:12,
      name:"MakeKit_Setiment"},        //12'name'
    {id:13,
      'name':"MakeKit_Box"},              //13
    ]);
*/


  const Test = () =>{
 //   const Navi2=[...Navii];
    
//  console.log("Navi_first:",Navi)
  for(var i=0 ;i<Navi.length;i++){
    if(ansList.A8 = 0 ){ // 캠핑 안가는 계절=  여름 && 전기 사용X
        if(Navi[i][1]== "MakeKit_Cooler_NoEnergy"){
        Navi.splice(i,1);
      //  console.log("Navi_Ans8:",Navi)
      }
      if(Navi[i][1]== "MakeKit_Heater_NoEnergy"){
        Navi.splice(i,1);
      //  console.log("Navi_2:",Navi)
      }  
    }
    if(ansList.A8 == 4 ){ // 캠핑 안가는 계절 -- 겨울 && 전기 사용 X
      if(Navi[i].name=="MakeKit_Heater_Energy"){
          Navi.splice(i,1);
      //  console.log("Navi_3:",Navi)
      }
      if(Navi[i][1] == "MakeKit_Cooler_NoEnergy"){
          Navi.splice(i,1);
      //  console.log("Navi_4:",Navi)
      }
    }
    if(ansList.A9 ==2){  // 전기 사용 안한다면
      if(Navi[i][1] == "MakeKit_Cooler_NoEnergy"){
        Navi.splice(i,1);
      //  console.log("Navi_Ans9:",Navi)
      }
      if(Navi[i][1]== "MakeKit_Heater_NoEnergy"){
        Navi.splice(i,1);
      //  console.log("Navi_Ans9-1:",Navi)
      }  
    }
    if(ansList.A5 == 2){ //감성 여부
      if(Navi[i][1]== "MakeKit_Sentiment"){
        Navi.push(Navi[i]);
        Navi.splice(i,1);
      //  console.log("Navi_Ans5:",Navi)
      }
    }
    if(ansList.A6 == 2){ //차박을 안한다면
      if(Navi[i][1] == "MakeKit_Tarp_NoCar"){
        Navi.splice(i,1);
      //  console.log("Navi_Tarp:",Navi)
      }
    }
    if(ansList.A8 == 4 ){ // 캠핑 안가는 계절 -- 겨울 && 전기 사용 X
      if(Navi[i][1]=="MakeKit_Heater_Energy"){
        Navi.splice(i,1);
      //  console.log("Navi_Ans8-1:",Navi)
      }
    }
    if(ansList.Af == 2){
      if(Navi[i][1]=="MakeKit_Tarp"){
        Navi.splice(i,1);
      //  console.log("Navi_Ansf:",Navi)
      }
      if(Navi[i][1]=="MakeKit_Tarp_NoCar"){
        Navi.splice(i,1);
      //  console.log("Navi_Ansf-1:",Navi)
      }
    }
  };
 // setNavi(Navi);
  console.log("Navi:",Navi)
  return (
    <Text>hello</Text>
  )
  }


  return (
    <View style={styles.container}>
      <Test name={'name'}/>
      <Button title={"hello"} onPress={ Test } > </Button>
      <Text>{a}</Text>
      <Text>{Navi[0][1]}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
