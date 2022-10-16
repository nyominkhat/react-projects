import React, { memo } from "react";

// import Item from "./Item";

// export default function List({ stories, onRemoveItem }) {
//   return (
//     <ul>
//       {stories.map((item) => {
//         return (
//           <Item key={item.author} item={item} onRemoveItem={onRemoveItem} />
//         );
//       })}
//     </ul>
//   );
// }

import Item from "./Item";

const List = memo(({ stories, onRemoveItem }) => {
  return (
    <ul>
      {stories.map((item) => {
        return (
          <Item item={item} key={item.objectID} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
  );
});

export default List;

// export default function List({ stories, onRemoveItem }) {
//   return (
//     <ul>
//       {stories.map((item) => {
//         return (
//           <Item item={item} key={item.objectID} onRemoveItem={onRemoveItem} />
//         );
//       })}
//     </ul>
//   );
// }

// class Lists extends React.Component {
//   render() {
//     const { stories, onRemoveItem } = this.props;

//     return (
//       <ul>
//         {stories.map((item) => {
//           return (
//             <Item item={item} key={item.objectID} onRemoveItem={onRemoveItem} />
//           );
//         })}
//       </ul>
//     );
//   }
// }
