// 必要なAWSモジュールをインポート
import { FileType } from '@/domain/file'
import AWS from 'aws-sdk'
import { Credentials } from 'aws-sdk'

// S3に画像をアップロードする関数
export const s3Upload = (files: FileType[]) => {
  // 認証情報を設定
  const creds = new Credentials(
    'AKIAT7UH3MBOLDORH2MT',
    'n1bhybIcvRgdW7GnC5WpOCrW16IJ631ffmzUr+/r',
  )

  // S3インスタンスを生成
  const s3 = new AWS.S3({
    region: 'ap-northeast-1',
    credentials: creds,
  })

  // S3にアップロードする際のパラメータを設定
  files.map((file) => {
    const uploadParams = {
      Bucket: 'livefirst',
      Key: file.fileName,
      Body: file.file,
    }

    // 非同期でアップロード処理を実行
    return new Promise<boolean>((resolve, reject) => {
      s3.upload(uploadParams, (err: unknown, data: unknown) => {
        if (err) {
          console.error('Error uploading file:', err)
          reject(err)
        } else {
          console.log('File uploaded successfully:', data)
          resolve(true)
        }
      })
    })
  })
}
