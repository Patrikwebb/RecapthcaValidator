
## Remove container
sudo docker rm -f ${sudo docker ps -a}

## Remove image
sudo docker rmi -f recaptcha

## Rebuild reaptcha image
sudo docker build -t recaptcha .

## Start the container
sudo docker run recaptcha -d

## Tail the log
sudo docker logs -f recaptcha
