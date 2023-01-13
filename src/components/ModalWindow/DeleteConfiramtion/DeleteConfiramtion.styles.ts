import styled from "styled-components";

// .title {
//   font-size: 2.5rem;
//   margin-bottom: 2rem;
//   padding-bottom: 2rem;
//   border-bottom: 0.2rem solid rgba(35, 33, 40, 0.15);
// }

// /* MESSAGE */
// .message {
//   text-align: center;
//   background-color: #e9aaaa;
//   color: #501111;
//   margin-bottom: 2rem;
//   padding: 1rem;
//   border-radius: 1rem;
//   font-size: 1.6rem;
// }

// /* BUTTONS */
// .btnContainer {
//   display: flex;
//   justify-content: flex-end;
//   padding-top: 2rem;
//   border-top: 0.2rem solid rgba(35, 33, 40, 0.15);
// }

// .btn {
//   font-size: 1.6rem;
//   border: none;
//   background-color: #e9ecef;
//   padding: 1rem;
//   border-radius: 10rem;
//   transition: 0.2s;
// }

// .btn:hover {
//   cursor: pointer;
// }

// .cancelBtn:hover {
//   outline: 0.2rem solid rgb(35, 33, 40);
// }

// .confirmBtn {
//   margin-left: 3.2rem;
//   background-color: #ff6b6b;
//   color: #501111;
// }

// .confirmBtn:hover {
//   color: #e9ecef;
//   outline: 0.2rem solid rgb(35, 33, 40);
// }

export const Title = styled.p`
   {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid rgba(35, 33, 40, 0.15);
  }
`;

export const ConfirmationMessage = styled.p`
   {
    text-align: center;
    background-color: #e9aaaa;
    color: #501111;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.6rem;
  }
`;

export const BtnContainer = styled.div`
   {
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    border-top: 0.2rem solid rgba(35, 33, 40, 0.15);
  }
`;

export const CancelBtn = styled.button`
   {
    margin-left: 3.2rem;
    background-color: #ff6b6b;
    color: #501111;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      outline: 0.2rem solid rgb(35, 33, 40);
    }
  }
`;

export const ConfirmBtn = styled.button`
   {
    font-size: 1.6rem;
    border: none;
    background-color: #e9ecef;
    padding: 1rem;
    border-radius: 10rem;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      color: #e9ecef;
      outline: 0.2rem solid rgb(35, 33, 40);
    }
  }
`;
