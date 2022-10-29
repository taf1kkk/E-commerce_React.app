import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        
        {
          id: 1,
          title: 'The Witcher',
          img: 'Witcher.png',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'Games',
          price: '99'
        },
        {
          id: 2,
          title: 'Playstation 5',
          img: 'ps5.jpeg',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'console',
          price: '499'
        },
        {
          id: 3,
          title: 'Red Dead Redemption',
          img: 'rdr.png',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'Games',
          price: '89'
        },
        {
          id: 4,
          title: 'Mortal Kombat X',
          img: 'mk.png',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'Games',
          price: '79'
        },
        {
          id: 5,
          title: 'God of War ',
          img: 'gow.png',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'Games',
          price: '59'
        },
        {
          id: 6,
          title: 'Assassins Creed Odyssey ',
          img: 'ac.png',
          desc: 'The PlayStation 4 is a home video game console developed by Sony Interactive Entertainment.',
          category: 'Games',
          price: '49'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
