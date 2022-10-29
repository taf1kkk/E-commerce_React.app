import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="." />
                <h2>{this.props.item.title}</h2>
                <p>Quantity: 1</p>
                <b>Price: {this.props.item.price}$</b>
                <FaTrash className='delete-item' onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order