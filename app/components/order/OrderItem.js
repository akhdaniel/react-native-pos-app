'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderItemCustomization from './OrderItemCustomization'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderTime: (this.props.orderTime),
      name: (this.props.name),
      customization: (this.props.customization),
      quantity: (this.props.quantity),
      price: (this.props.price)
    }
  }

  splitCustomization(customizations) {

  }

  render () {
    return (
      <View style={styles.orderItem}>
        <View style={styles.time}>
          <Text>{this.props.item.orderTime}</Text>
        </View>
        <OrderItemCustomization>
          <Text>{this.props.item.name}</Text>
          {this.splitCustomization(this.props.item.customization)}
        </OrderItemCustomization>
        <View style={styles.text}>
          <Text>{this.props.item.quantity}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.priceText}>{this.props.item.price}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
      paddingLeft: 10,
      paddingRight: 10,
  },
  time: {
      flex: 1.5,
      alignItems: "flex-start"
  },
  text: {
      flex: 1,
      alignItems: "center"
  },
  priceText: {
      textAlign: "right"
  }
})

module.exports = OrderItem