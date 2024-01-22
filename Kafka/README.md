docker-compose ps

docker exec -it kafka-kafka-1 /bin/bash

kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3

kafka-topics --list --bootstrap-server=localhost:9092

kafka-topics --bootstrap-server=localhost:9092 --topic=teste --describe

kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste

kafka-console-producer --bootstrap-server=localhost:9092 --topic=teste

kafka-consumer-groups --bootstrap-server=localhost:9092 --group=x --describe