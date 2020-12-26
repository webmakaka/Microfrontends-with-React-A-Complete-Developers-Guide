# [Stephen Grider] Microfrontends with React: A Complete Developer's Guide [ENG, 2020]

<br/>

## 07 Deployment to Amazon Web Services

<br/>

### 053 S3 Bucket Setup

<br/>

![Application](/img/pic-m07-p01.png?raw=true)

AWS -> S3 -> Create Bucket

Bucket name: webmakaka-microfrontends-dashboard

Create

<br/>

webmakaka-microfrontends-dashboard -> Properties -> Static website hosting -> Edit

<br/>

![Application](/img/pic-m07-p02.png?raw=true)

<br/>

webmakaka-microfrontends-dashboard -> Permissions -> Block public access (bucket settings)

<br/>

![Application](/img/pic-m07-p03.png?raw=true)

<br/>

### 054 Authoring a Bucket Policy

webmakaka-microfrontends-dashboard -> Permissions -> Bucket policy -> Edit

Policy Generator

Select TYpe of Policy -> S3 Bucket Policy

Effect -> Allow

Principal -> \*

Actions: -> GetObject

Amazon Resource Name (ARN) -> {BUCKER_ARN}/\*

<br/>

![Application](/img/pic-m07-p04.png?raw=true)

<br/>

Add Statement

<br/>

Generate Policy

```
{
  "Id": "Policy1608952809179",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1608952765726",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::webmakaka-microfrontends-dashboard/*",
      "Principal": "*"
    }
  ]
}
```

<br/>

![Application](/img/pic-m07-p05.png?raw=true)

<br/>

### 055 Cloudfront Distribution Setup

CloudFront -> Create Distribution -> Web

<br/>

Origin Domain Name: webmakaka-microfrontends-dashboard.s3.amazonaws.com

Default Cache Behavior Settings -> Viewer Protocol Policy -> Redirect HTTP to HTTPS

<br/>

### 056 A Bit More Cloudfront Configuration

Cloudfront -> {Created Cloudfront}:

General -> Edit

Default Root Object -> /container/latest/index.html

<br/>

Error Pages -> Create Custom Error Response

HTTP Error Code -> 403 Forbidden

Customize Error Response -> Yes

Response Page Path -> /container/latest/index.html

HTTP Response Code -> 200: OK

<br/>

### 057 Creating and Assigning Access Keys

AWS -> IAM -> Genereate Keys

<br/>

GitHub -> Microfrontends-with-React-A-Complete-Developers-Guide -> Settings -> Secrets -> New Secret

<br/>

![Application](/img/pic-m07-p06.png?raw=true)

<br/>

### 058 Rerunning the Build

<br/>

### 059 A Small Error

<br/>

### 060 Webpacks PublicPath Setting

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
