import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../UploadFile/UploadFile.css';

const UploadFile = () => {
    return (
    
        
    // <div className="drop">
    //     <span className="drop-prompt">Arrastrar o click para subir archivo</span> 
    //         <div className="drop__thumb" data-label="file.txt"></div>
    //         <input type="file" name="file" className="drop__input">
    // </div>

    <div className="input-group mb-3" >
        <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile02">
            <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Seleccionar archivo</label>
        </div>
    <div className="input-group-append">
    <span className="input-group-text" id="inputGroupFileAddon02">Subir</span>
  </div>
</div>

        {/* <div class="drop">
            <span class="drop__prompt">Drop file here or click to upload</span>
            <input type="file" name="myFile" class="drop__input">
        </div> */}

    );
};
export default UploadFile;