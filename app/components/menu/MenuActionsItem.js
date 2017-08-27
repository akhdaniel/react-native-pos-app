'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuActionsItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addItems(drinkItem, foodItem, orderNumber) {
    if (drinkItem.name)
      this.props.findOrderAndAddDrinkItem(drinkItem, orderNumber)
    if (foodItem.ingredients.length > 0)
      this.props.findOrderAndAddFoodItem(foodItem, orderNumber)
    else console.log("nothing to add")
  }

  render () {
    return (
      <View style={styles.menuActions}>
        <View style={styles.placeholder} />
        <TouchableOpacity style={styles.button} onPress={() => {this.addItems(this.props.drinkItem, this.props.foodItem, this.props.order.orderNumber)}}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    drinkItem: state.drinkItem,
    foodItem: state.foodItem,
    order: state.order
  }
}

const styles = StyleSheet.create({
    menuActions: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "stretch",
      backgroundColor: "pink"
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "grey",
      padding: 15
    },
    placeholder: {
      flex: 4
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuActionsItem)