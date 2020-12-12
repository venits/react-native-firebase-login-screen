import React from 'react'
import { Snackbar } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { theme } from '../core/theme'

const Toast = ({ type = 'error', message, onDismiss }) => (
  <View style={styles.container}>
    <Snackbar
      visible={!!message}
      duration={3000}
      onDismiss={onDismiss}
      style={{
        backgroundColor:
          type === 'error' ? theme.colors.error : theme.colors.success,
      }}
    >
      <Text style={styles.content}>{message}</Text>
    </Snackbar>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80 + getStatusBarHeight(),
    width: '100%',
  },
  content: {
    fontWeight: '500',
  },
})

export default Toast
