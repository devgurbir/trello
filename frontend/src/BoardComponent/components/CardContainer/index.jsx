/** @format */
import styles from "../../styles/Index.module.css";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import AddColumn from "./AddColumn";
import { useEffect, useState } from "react";
import { getBoardDetails } from "../../../Redux/Actions";
import { useParams } from "react-router-dom";
const CardContainer = () => {
  const { boards } = useSelector((state) => state.boards);
  const dispatch = useDispatch();
  const [board, setBoard] = useState([]);
  // console.log({ boards });

  const {board_id} = useParams()
  useEffect(() => {
    getBoardDetails(board_id)(dispatch);
  }, []);

  useEffect(() => {
    setBoard(boards);
  }, [boards]);

  if (!board?.length) return <div>loading............</div>;
  return (
    <>
      <div className={styles.cardContainer}>
        {board?.map(({ columns }, index) => (
          <Column key={index} columns={columns} />
        ))}
        {board?.map((board, index) => (
          <AddColumn key={index} board={board} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
