import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const timer = () => {
    let timerRef = React.useRef(null);

    useEffect(() => {
      // Clear the interval when the component unmounts
      return () => clearTimeout(timerRef.current);
    }, []);
    
    const handleControlsInteraction = () => {
    
      if (timerRef.current != null) {
        clearTimout(timerRef.current)
      }
    
      // now we set a new timer for 1 second
      timerRef.current = setTimeout(() => {
        setDisplayButtons(false);
      }, 1000);
    };
}

export default timer

const styles = StyleSheet.create({})