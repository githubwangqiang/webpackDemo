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
console.log('11133322')
  document.body.appendChild(component());

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!')
      printMe()
    })
  }
