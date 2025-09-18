@echo off
REM Create necessary directories
mkdir frontend\src
mkdir frontend\public
mkdir backend\src

REM Move frontend files
move /Y tutorial.tsx frontend\src\
move /Y types.d.ts frontend\src\
move /Y tsconfig.json frontend\
move /Y package.json frontend\
move /Y package-lock.json frontend\
move /Y node_modules frontend\

REM Move backend files
move /Y requirements.txt backend\
move /Y services backend\
move /Y steps backend\

REM Remove unwanted files
del /Q AGENTS.md
rd /S /Q .claude
rd /S /Q .cursor
rd /S /Q .motia

echo Project has been reorganized into frontend and backend folders.
pause
