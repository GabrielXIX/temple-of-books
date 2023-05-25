import styled from "styled-components";

export const StyledReviewModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: #0005;

  & > form {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff4e8;

    border-radius: 8px;
    padding: 2rem;

    width: 30rem;
    //height: 20rem;

    & > textarea {
      width: 100%;
      resize: none;
      line-height: 1.6;
      overflow-y: hidden;
      border: none;
      border-radius: 8px;
      padding: 1rem;

      &:focus {
        outline: 2px solid #ffd5a9;
      }
    }

    & > h3 {
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > div {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      justify-content: flex-end;

      & > button {
        border-radius: 8px;
        padding-inline: 2rem;
      }

      & > button:first-of-type {
        background-color: #ff9b9b;
      }

      & > button:nth-of-type(2) {
        background-color: #ffd5a9;
      }
    }
  }
`;

/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque accusamus ullam porro delectus cupiditate iusto. Cum, modi. Esse temporibus adipisci quam laborum architecto eius modi aspernatur, neque atque magni?
Earum et soluta sint dolorum ipsa fugit sapiente assumenda, aliquid minus provident sed at illum quod ut ullam labore eaque excepturi rerum a quos aspernatur. Adipisci labore blanditiis accusantium autem!
Culpa, reprehenderit fuga quos rerum impedit odio dolore asperiores corrupti porro dicta tempore, illum eum quasi similique! Vitae nisi harum, officia voluptate deserunt delectus velit pariatur aspernatur temporibus. Tempore, nisi.
Ex sed beatae rem quisquam. Id, repellat dignissimos sit dolores dolorem doloribus natus iure! Porro ipsum tempora consequatur voluptatem similique quibusdam suscipit. Vitae nulla nobis perspiciatis omnis molestiae, porro distinctio?
Distinctio atque facilis ab magnam exercitationem perferendis, placeat, repudiandae perspiciatis in officia velit asperiores voluptatum deserunt at, maxime architecto quod esse cupiditate dolores? Tempora, eaque consectetur in perspiciatis reprehenderit distinctio!
Ad tempora numquam provident, repudiandae sequi sint quibusdam accusamus assumenda officia a illum hic accusantium quidem rem veritatis harum commodi eos! Mollitia ratione itaque natus nihil nostrum dolorem molestias in.
Voluptatum eaque doloribus, quidem accusamus possimus obcaecati quod quas consequatur dolore vitae, nihil minus optio tempora dolorem libero? Ea corrupti expedita officiis, ullam recusandae consequuntur. Nulla in at delectus! Sed.
Similique veniam facilis illum dolore, maiores nulla in cumque, provident ad ut dicta veritatis commodi perspiciatis voluptatum dolores ducimus, alias consequatur nam voluptate. Id, necessitatibus ex numquam nesciunt possimus provident!
Est, quas architecto? Aliquid, architecto omnis saepe sequi nam laborum eum ea velit officiis, porro corporis? Quaerat minima nulla quia amet sed explicabo, veniam reprehenderit maxime quae incidunt iure molestias?
Vitae necessitatibus explicabo sunt natus odit perferendis culpa in, ducimus at deleniti. Reiciendis culpa ratione id voluptate laudantium reprehenderit. Sequi laudantium eum aliquam incidunt libero saepe expedita possimus ea eligendi.*/
