build-test:
	podman build -f containers/Dockerfile -t ghcr.io/kretostan/task-manager:test-001 .

run-test:
	podman run -p 3000:3000 --env-file=.env --rmi -d ghcr.io/kretostan/task-manager:test-001

dev-up:
	podman compose -p task-manager-dev -f containers/compose.dev.yaml up --build -d

dev-down:
	podman compose -p task-manager-dev -f containers/compose.dev.yaml down

dev-logs:
	podman logs --follow task-manager-dev_app_1

prod-up:
	podman compose -p task-manager-prod -f containers/compose.yaml up -d

prod-down:
	podman compose -p task-manager-prod -f containers/compose.yaml down
