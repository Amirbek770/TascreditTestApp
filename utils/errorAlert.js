import React from 'react'
import { Alert } from 'react-native';

export default function errorAlert(error, from) {
  console.log("errorAlert from", from);
  console.log("errorAlert from",error);
    let data = error.response.data;
    if (data.errors) {
        let k = 0;
        Object.keys(data.errors).forEach((item) => {
          let err = data.errors[item];
          k++;
          for (let i = 0; i < err.length; i++) {
            setTimeout(() => {
                Alert.alert(
                    `Ошибка`,
                    ` ${err[i]}`,
                  );
            }, 100 * k);
          }
        });
      }
      else if (data.message) {
        Alert.alert(
            `Ошибка`,
            ` ${data.message}`,
          );
      }
      else {
        Alert.alert(
            `Ошибка`,
            ` Доступа нет`,
          );
      }
    
}
