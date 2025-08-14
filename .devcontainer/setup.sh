#!/bin/bash

# Create virtual environment
echo "Creating Python virtual environment..."
python -m venv .venv

# Activate virtual environment
echo "Activating virtual environment..."
source .venv/bin/activate

# Install documentation requirements if they exist
echo "Installing requirements from requirements.txt..."
pip install -r requirements.txt

# Set up shell to auto-activate virtual environment
echo "Configuring shell to auto-activate virtual environment..."
echo 'source .venv/bin/activate' >> ~/.bashrc

echo "Setup complete! Virtual environment is ready."
