import React, { useState,useRef} from 'react';
import { QrReader } from 'react-qr-reader';
import { useQrReader } from 'react-qr-reader';
import QRCode from 'qrcode';
import QrScanner from 'qr-scanner';

function QRScanner() {
  const [result, setResult] = useState('');
  const [img , setImg]=useState('');
  const qrRef =useRef(null)

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  }

  const handleError = (error) => {
    console.error(error);
  }

  const generateQrCode=async()=>{
    try{
        const response = await QRCode.toDataURL('Abhishek Malviya');
        console.log(response)
        setImg(response)
    }catch(error){
        console.log(error)
    }
  }

  const onScanFile=()=>{
    qrRef.current.openImageDialog();
  }

  const readCode = (e)=>{
    const file = e.target.file[0];
    if(!file){
        return;
    }
    QrScanner.scanImage(file,{resultDetailsScanResult:true}).
    then(result=> setResult(result.data))
    .catch(e=> console.log(e));
  }
  return (
    <div>
      <button onClick={generateQrCode}>click</button>
      <a href={img} download><img src={img} width='100px'/></a>
    <div class='col-md-4'>
        <button class='btn btn-secondary' onClick={onScanFile}>upload</button>
        <QrReader 
        ref={qrRef}
        delay={300}
        style={{width:'100%'}}
        onError = {handleError}
        onScan = {handleScan}
        legacyMode
        />
        <h3>Scan Code:{result}</h3>
    </div>
    </div>
  );
}

export default QRScanner;
