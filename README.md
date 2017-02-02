# fairbiomarket

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.


## Test Users
admin@example.com / admin123

## Firebase url
https://console.firebase.google.com/project/ember-fb80a

https://ember-fb80a.firebaseapp.com

## Run server
# Exploded
$ gradle bootRun

# As packaged app
$ java -jar build/libs/fairbiomarket-0.0.1-SNAPSHOT.jar

# You might also want to use this useful operating system environment variable:
$ export JAVA_OPTS=-Xmx1024m -XX:MaxPermSize=128M




# copy to server
scp -P 222 build/libs/fairbiomarket-0.0.1-SNAPSHOT.jar pablo@anecico.com:/home/pablo/codigoverde/server/

# to create a service in ubuntu
put codigoverde.sh in  ~/codigoverde
 
put codigoverde.service in the server's /etc/systemd/system/ folder and make it executable

systemctl enable codigoverde
run start, stop or restart
logs are in /tmp/spring.log
 
