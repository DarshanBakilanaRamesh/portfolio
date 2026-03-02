# Terraform Setup

This folder contains a minimal Terraform starter for provisioning the AWS infrastructure used by the portfolio deployment.

## Managed resources

- EC2 instance
- Security group for SSH and HTTP access

## Files

- `main.tf`: provider and AWS resources
- `variables.tf`: configurable inputs
- `outputs.tf`: values shown after apply
- `terraform.tfvars.example`: example variable values

## Usage

1. Copy the example variables file:

```bash
cp terraform.tfvars.example terraform.tfvars
```

2. Fill in:

- `ami_id`
- `key_pair_name`
- `ssh_allowed_cidrs`

3. Initialize Terraform:

```bash
terraform init
```

4. Review the execution plan:

```bash
terraform plan
```

5. Create the infrastructure:

```bash
terraform apply
```

## Notes

- `terraform.tfvars` is ignored by Git because it may contain environment-specific values.
- Terraform state files are also ignored and should not be committed.
