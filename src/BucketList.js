// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
// redux 훅 중, useSelector를 가져옵니다.
import { useSelector } from "react-redux";

const BucketList = (props) => {
    let history = useHistory();
// 이 부분은 주석처리!

//우리는 props에서 말고 리덕스스토어에서 받아올거이여요


// 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
// 우리는 그 중, bucket 안에 들어있는 list를 가져옵니다.
// useSelector에서는 함수가 들어가야합니다.... 어떤함수 ? 어떤 함수를 가지고싶은지에 대한~~, State는 전체 데이터를 말하는거임~~
    const my_lists = useSelector((state) => state.bucket.list);
    return (
        <ListStyle>
            {
            my_lists.map((list, index) => {
            return (
                <ItemStyle className="list_item" key={index} onClick={() => {
                    history.push("/detail/"+index);
                                                                            }
                                                                    }
                >
                {list}
                </ItemStyle>
                    );
                                            }
                        )
            }
        </ListStyle>
);
};

const ListStyle = styled.div`
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