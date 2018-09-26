---
layout: post
title: "Integration with AWS S3 using spring cloud"
date: 2018-02-12
---

# Integration with AWS S3 using spring cloud

In this quick article, we’re going to explore the AWS support provided in the Spring Cloud platform – focusing on S3.

####What is AWS S3 Bucket?
S3 bucket is a storage as a service of AWS i.e amazon web services, this service is used to store heterogeneous objects means any type of file or folder. S3 bucket is basically used to store data on a cloud with security, integrity, and Accessibility  Aws claims that file or folder will be accessible 99.9% of all the time 0.1% due to any un deterministic fault in the system, so most of the developers prefer to use to store data for there servers.
 
This service stores data in buckets used as containers to store data objects, you can make many buckets and buckets are individually have read and write access to different users so admin of S3 bucket has right to give access to any user for read only or write only or just read the properties of file only, this service has 1 great feature for security that is the file is secured and only accessible through secured link which is generated and destroyed after some time (after expiry time) so every time user access the file he has to ask for new secured link to access that file.

AWS SDK for java provides an api for list, create and delete s3 buckets. 

Below sample program uses AWS SDK for java to create, download, delete and rename resources in s3 bucket.

**AWS JAVA SDK**

```java

<dependency>
            <groupId>com.amazonaws</groupId>
            <artifactId>aws-java-sdk-s3</artifactId>
            <version>1.11.335</version>
</dependency>
```

**AWS Credentials and AWS Client config**

``` AWSCredentials ``` class hold credentials to create connection to AWS s3 bucket.

``` 
AWSCredentials credentials = new BasicAWSCredentials(
     "<AWS accesskey>", 
     "<AWS secretkey>"
   );
```

``` AmazonS3ClientBuilder ``` provides builder to configure and create ``` AmazonS3 ``` Client.

```$xslt
AmazonS3 s3client = AmazonS3ClientBuilder
  .standard()
  .withCredentials(new AWSStaticCredentialsProvider(credentials))
  .withRegion(Regions.US_EAST_2)
  .build();
```
####Amazon S3 Bucket Operations

***List buckets***

listBuckets() method of ``` AmazonS3 ``` client list all buckets available in s3 environment.

```$xslt
List<Bucket> buckets = s3client.listBuckets();
for(Bucket bucket : buckets) {
    System.out.println(bucket.getName());
}

```

***Create bucket***

createBucket() method of ``` AmazonS3 ``` client create the S3 bucket.

Bucket name should follow below naming conventions.
* names should not contain underscores
* names should be between 3 and 63 characters long
* names should not end with a dash
* names cannot contain adjacent periods
* names cannot contain dashes next to periods (e.g., “s3-.bucket.com” and “s3.-bucket” are invalid)
* names cannot contain uppercase characters

```$xslt
s3client.createBucket(bucketName);
```

***Delete bucket***
deleteBucket() method of ``` AmazonS3 ``` client delete s3 bucket.

**It’s important to ensure that our bucket is empty before we can delete it.**
 Otherwise, an exception will be thrown. Also, note that only the owner of a bucket can delete it regardless Access Control Policies.
 
```$xslt
try {
    s3client.deleteBucket(bucketName);
} catch (AmazonServiceException e) {
   log.error("e.getErrorMessage());
}
```

####S3 Object Operations

 Below operations can be done on s3 objects like uploading, listing, downloading, copying, moving, renaming and deleting.
 
 ***Uploading Objects***
 
 putObject() method which accepts three parameters:
 
 1. bucketName: The bucket name 
 2. key: This is the full path to the file
 3. ile: The actual file containing the data to be uploaded
 
 ```$xslt
 s3client.putObject(
   bucketName, 
   "dir/file.txt", 
   new File("/Users/s3/dir/file.txt")
 );

```
 
 ***Listing Objects***
 
 listObjects() method to list all the available objects in our S3 bucket.
 ```$xslt
ObjectListing listing = s3client.listObjects(bucketName);
 for(S3ObjectSummary summary : listing.getObjectSummaries()) {
     log.info(summary.getKey());
 }
```
 
 Calling listObjects() method of the s3client object will yield the ObjectListing object, which can be used to get a list of all the object summaries in the specified bucket. 
 We’re just printing the key here, 
 but there are also a couple of other options available, 
 like size, owner, last modified, storage class.
 
***Downloading an Object***
 
 getObject() method on s3client which will return an S3Object object.
  Once we get this, we’ll call getObjectContent() on this to get an S3ObjectInputStream object which behaves like a conventional Java InputStream.
 
 ```$xslt
 S3Object s3object = s3client.getObject(bucketName, "dir/file.txt");
 S3ObjectInputStream inputStream = s3object.getObjectContent();
 FileUtils.copyInputStreamToFile(inputStream, new File("/Users/s3/file.txt"));
```
 FileUtils.copyInputStreamToFile() method by Apache Commons used to convert an InputStream to a File.
 
 ***Copying, Renaming and Moving an Object***
 
   copyObject() method on our s3client used to copy object. This method accepts four parameters:
 
 1. source bucket name
 2. object key in source bucket
 3. destination bucket name
 4. object key in destination bucket
 
 ```$xslt
s3client.copyObject(
   "sourcebucket", 
   "s3/file.txt", 
   "destinationbucket", 
   "s3/destination.txt"
 );
```
 
 Note: We can use a combination of copyObject() method deleteObject() for performing moving and renaming tasks. This will involve copying the object first and then deleting it from its old location.
 
***Deleting an Object***
 
 deleteObject() method on s3client used to delete object. 
 
 ```$xslt
 s3client.deleteObject("s3-bucket","s3/file.txt");
```

Full documentation of these APIs is at [AWS S3 for java](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3.html)

Full sample code is on [Github]()