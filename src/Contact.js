import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

  return <Wrapper className='section'>
    <h2 className="common-heading">Feel Free to Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.697785996521!2d75.83896767514676!3d26.785901776722966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e06043e8f5%3A0xfa28b2144b13bd88!2sAuriga%20IT%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718089116391!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className='container'>
      <div className='contact-form'>
        <form action="#" method="POST" className="contact-inputs">
          <input type='text' name="username" placeholder="username" autoComplete='off' required ></input>
          <input type='email' name="Email" placeholder="Email" autoComplete='off' required ></input>
          <textarea name="message" cols="30" row="6"></textarea>
          <input type='submit' value='send'></input>
        </form>
      </div>

    </div>
  </Wrapper>
}




export default Contact