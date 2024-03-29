import React, { Component } from 'react'

class Roulette extends Component{
  constructor(props) {
    super(props)
    this.rotate = this.rotate.bind(this)
    this.clearBg = this.clearBg.bind(this)
  }
  clearBg() {
    for(let i = 0; i < document.querySelectorAll('.rouCol').length; i++){
      document.querySelectorAll('.rouCol')[i].style.backgroundColor = '#fff'
      document.querySelectorAll('.rouCol')[i].innerHTML = ''
    }
  }
  rotate() {
    document.querySelector('.btn').disabled = true
    this.clearBg()
    let min = 0
    const max = Math.floor(Math.random() * 10 + 40)
    let moveBg = setInterval(rotateMove, 50)
    function rotateMove() {
      if(min % 12 === 0) {
        document.querySelectorAll('.rouCol')[min % 12].style.backgroundColor = '#ccc'
        document.querySelectorAll('.rouCol')[(min % 12) + 11].style.backgroundColor = '#fff'
      } else {
        document.querySelectorAll('.rouCol')[min % 12].style.backgroundColor = '#ccc'
        document.querySelectorAll('.rouCol')[(min % 12) - 1].style.backgroundColor = '#fff'
      }
      if(min == Math.round(max / 2)) {
        clearInterval(moveBg)
        moveBg = setInterval(rotateMove,100)
      } else if(min == Math.round(max / 1.2)) {
        clearInterval(moveBg)
        moveBg = setInterval(rotateMove,300)
      } 
      if(min === max) {
        const rand = Math.floor(Math.random() * 11)
        const restaurant = [
          '麥當勞',
          '正常滷味',
          '洲子美食街',
          '牛耳',
          '山東水餃',
          '自由時報',
          '牛排',
          '咖哩飯',
          '韓食館',
          '小時候',
          '主廚蓋飯',
          '摩斯漢堡'
        ]
        clearInterval(moveBg)
        document.querySelectorAll('.rouCol')[min % 12].innerHTML = restaurant[rand]
        document.querySelector('.btn').disabled = false
      } 
      min++
    }
  }
  render() {
    return (
      <div>
          <div className="wrapRoulette">
            <div className="rouCol rouCol1"></div>
            <div className="rouCol rouCol2"></div>
            <div className="rouCol rouCol3"></div>
            <div className="rouCol rouCol4"></div>
            <div className="rouCol rouCol5"></div>
            <div className="rouCol rouCol6"></div>
            <div className="rouCol rouCol7"></div>
            <div className="rouCol rouCol8"></div>
            <div className="rouCol rouCol9"></div>
            <div className="rouCol rouCol10"></div>
            <div className="rouCol rouCol11"></div>
            <div className="rouCol rouCol12"></div>
            <button className="btn" onClick={this.rotate}>吃飯GO</button>
            <div className="clearfix"></div>
          </div>
      </div>
    )
  }
}

export default Roulette