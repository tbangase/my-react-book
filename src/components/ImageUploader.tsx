import React, {useState, useRef} from 'react'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const UPLOAD_DELAY = 5000

export const ImageUploader = () => {
  // HTML疑似要素へのリファレンス
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  // アップロードしたファイルへのリファレンス
  const fileRef = useRef<File | null>(null)

  const [message, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (inputImageRef.current) {
      inputImageRef.current.click()
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      fileRef.current = file
      setMessage(`${file.name} is selected`)
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current) {
      setMessage('Uploading...')
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current.name} has been successfully uploaded`)
    }
  }

  return (
    <div style={{padding: '0px 20px'}}>
      <h1>Image Uploader</h1>
      <p style={{textDecoration: 'underline'}} onClick={onClickText}>
        Upload Image
      </p>
      <input type="file" ref={inputImageRef} onChange={onChangeImage} style={{visibility: 'hidden'}} />
      <br />
      <button onClick={onClickUpload}>Upload</button>
      <p>{message}</p>
    </div>
  )
}
