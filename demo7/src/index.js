import _ from 'lodash';
  import './style.css';
  import Icon from './bg_yasi.png';
import printMe from './print';

  function component() {
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
console.log('11122')

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
 document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // 重新渲染页面后，component 更新 click 事件处理
     document.body.appendChild(element);
    })
  }
