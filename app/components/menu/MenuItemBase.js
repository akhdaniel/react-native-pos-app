'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuItemBase extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  ToggleBase(baseItem) {
    if (this.props.foodItem.base) {
      if (this.props.foodItem.base.name === this.props.item.name)
        this.props.clearBaseItem()
      else this.props.selectBase(baseItem)
    }
    else this.props.selectBase(baseItem)
  }

  getStyle(){
    if (this.props.item.name == null || this.props.foodItem.base == null)
      return styles.itemNotSelected
    else if (this.props.foodItem.base.name === this.props.item.name)
      return styles.itemSelected
    else return styles.itemNotSelected
  }

  render() {
    return (
      <TouchableOpacity style={this.getStyle()} onPress={() => {this.ToggleBase(this.props.item)}}>
        <Text style={styles.text}>{this.props.item.menuName}</Text>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    foodItem: state.foodItem
  }
}

const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,

    },
    itemSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "black",
      borderWidth: 1.5,
      backgroundColor: "blue",
    },
    itemNotSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "purple",
      borderWidth: 1.5,
      backgroundColor: "beige",
    },
    text: {
        textAlign: "center",
        fontSize: 25,
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuItemBase)
