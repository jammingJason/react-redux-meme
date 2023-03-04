import React from 'react';
import './MemeGenerator.css';
import { useDispatch, useSelector } from 'react-redux';

const MemeGenerator = () => {
  const url = useSelector((store) => store.url);
  const header = useSelector((store) => store.header);
  const footer = useSelector((store) => store.footer);
  const dispatch = useDispatch();
  const setUpMeme = () => {
    const textHeader = document.querySelector('#textHeader');
    const textURL = document.querySelector('#textURL');
    const textFooter = document.querySelector('#textFooter');
    console.log(url);
    dispatch({
      type: 'CREATE',
      url: textURL.value,
      header: textHeader.value,
      footer: textFooter.value,
    });
    createMeme();
  };

  //  Creates the Meme
  function createMeme() {
    alert(url);
    const divMemeHolder = document.createElement('div');
    const divParent = document.querySelector('.memes');
    divParent.append(divMemeHolder);
    divMemeHolder.className = 'memeHolder';
    const divHeader = document.createElement('div');
    divMemeHolder.append(divHeader);
    const textHeader = document.querySelector('#textHeader');
    divHeader.innerText = header;
    textHeader.value = '';
    divHeader.className = 'memeHeader';
    const imageMeme = document.createElement('img');
    divMemeHolder.append(imageMeme);
    const textURL = document.querySelector('#textURL');
    imageMeme.src = url;
    // alert(imageMeme.height);
    textURL.value = '';
    imageMeme.className = 'newImages';
    // divHeader.innerText = 'Header Text';
    const divFooter = document.createElement('div');
    divMemeHolder.append(divFooter);
    const textFooter = document.querySelector('#textFooter');
    divFooter.innerText = footer;
    textFooter.value = '';
    divFooter.className = 'footerMeme';
    const btnDelete = document.createElement('button');
    divMemeHolder.append(btnDelete);
    btnDelete.innerText = 'Delete Meme';
    btnDelete.className = 'deleteButtons';
    btnDelete.addEventListener('click', function (event) {
      event.preventDefault();
      let delParent = btnDelete.parentElement;
      delParent.remove();
      btnDelete.remove();
    });
  }

  return (
    <>
      <form action="" id="mainForm" name="frmMain">
        <div className="formHolder">
          <h1>Meme Generator</h1>
          <div className="inputItems">
            <div className="memeInfo">
              <label htmlFor="textURL">Enter URL for the image : </label>
            </div>
            <div className="memeInfo">
              <input
                type="text"
                id="textURL"
                placeholder="https://www.domain.com/images/image.jpg"
              />
            </div>
            <div className="memeInfo">
              <label htmlFor="textHeader">
                Enter text for the top of the Meme :{' '}
              </label>
            </div>
            <div className="memeInfo">
              <input
                type="text"
                id="textHeader"
                placeholder="This goes at the top"
              />
            </div>
            <div className="memeInfo">
              <label htmlFor="textFooter">
                Enter text for the bottom of the Meme :{' '}
              </label>
            </div>
            <div className="memeInfo">
              <input
                type="text"
                id="textFooter"
                placeholder="This goes at the bottom"
              />
            </div>
            <div className="memeInfo" id="buttonSection">
              <button type="button" onClick={setUpMeme} id="btnSubmit">
                Create Meme
              </button>
            </div>
          </div>
        </div>
        <div className="memes"></div>
      </form>
    </>
  );
};

export default MemeGenerator;
