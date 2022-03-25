// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

const BucketList = (props) => {
    const my_lists = props.list;
    const my_wrap =React.useRef(1);
    

    window.setTimeout(() => {console.log(my_wrap)} , 1000)
return (
    <ListStyle ref={my_wrap}>
        {my_lists.map((list, index) => {
        return (
            <ItemStyle key={index}>
            {list}
            </ItemStyle>
        );
    })}
    </ListStyle>
    );
};

const ListStyle = styled.div`
background-color:yellow;
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;

export default BucketList;