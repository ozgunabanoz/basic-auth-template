import React from 'react';

import styles from './Main.module.css';

const Main = props => {
  return (
    <div className={styles['main-div']}>
      <div className={styles['card']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent sit amet arcu urna. Nam venenatis dapibus tellus, ut
        interdum ex tempor eu. Nulla interdum enim id lorem porta, eu
        mattis ligula laoreet. Sed fermentum nibh sed nisl auctor,
        egestas rhoncus nunc bibendum. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Etiam tellus nibh, vehicula in
        tellus vel, volutpat mattis magna. Vivamus arcu tellus,
        suscipit quis ante sagittis, scelerisque egestas ante. Mauris
        feugiat luctus euismod. Integer viverra porta maximus. Aliquam
        fermentum justo vel tristique volutpat. In dapibus arcu in
        molestie pretium. Maecenas quis bibendum ex. Nullam tristique
        nec justo quis cursus. Quisque nec lacinia augue.
      </div>
    </div>
  );
};

export default Main;
