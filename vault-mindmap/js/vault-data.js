// IBM Vault radial mindmap data source.
// Interactive Sales Tool Version

window.VAULT_MINDMAP_DATA = {
  title: "IBM Vault",
  shortTitle: "Vault",
  type: "root",
  summary:
    "Centralized secrets and encryption platform for modern applications.",
  children: [
    {
      title: "Secrets Management",
      shortTitle: "Secrets",
      type: "category",
      summary:
        "Securely store and dynamically manage application credentials and sensitive data.",
      children: [
        {
          title: "Centralized Secrets Storage",
          shortTitle: "Central Store",
          type: "feature",
          summary:
            "Securely store passwords, API keys, and tokens in one controlled platform.",
          children: [
            {
              title: "Microservices Password Control",
              shortTitle: "Example",
              type: "example",
              summary:
                "A bank running 500 microservices can centrally update database passwords without redeploying applications."
            }
          ]
        },
        {
          title: "Dynamic Secrets",
          shortTitle: "Dynamic",
          type: "feature",
          summary:
            "Generate short-lived credentials that automatically expire.",
          children: [
            {
              title: "Temporary Production Access",
              shortTitle: "Example",
              type: "example",
              summary:
                "Vault creates a database account valid for 30 minutes, then automatically revokes it."
            }
          ]
        },
        {
          title: "Automated Secret Rotation",
          shortTitle: "Rotation",
          type: "feature",
          summary:
            "Automatically rotates database passwords and cloud credentials.",
          children: [
            {
              title: "Compliance-Driven Password Changes",
              shortTitle: "Example",
              type: "example",
              summary:
                "A company must rotate credentials monthly — Vault handles it automatically without downtime."
            }
          ]
        }
      ]
    },
    {
      title: "Encryption & Key Management",
      shortTitle: "Crypto",
      type: "category",
      summary:
        "Protect sensitive data through centralized encryption and lifecycle-controlled keys.",
      children: [
        {
          title: "Encryption as a Service",
          shortTitle: "Encrypt API",
          type: "feature",
          summary:
            "Applications encrypt data via API without managing encryption keys.",
          children: [
            {
              title: "Credit Card Protection",
              shortTitle: "Example",
              type: "example",
              summary:
                "An e-commerce platform encrypts credit card data by calling Vault APIs instead of building custom encryption logic."
            }
          ]
        },
        {
          title: "Key Lifecycle Management",
          shortTitle: "Key Lifecycle",
          type: "feature",
          summary:
            "Centralized control, rotation, and auditing of encryption keys.",
          children: [
            {
              title: "90-Day Key Rotation",
              shortTitle: "Example",
              type: "example",
              summary:
                "A financial institution rotates encryption keys every 90 days to meet regulatory requirements."
            }
          ]
        },
        {
          title: "HSM Integration",
          shortTitle: "HSM",
          type: "feature",
          summary:
            "Integrates with Hardware Security Modules for high-assurance key protection.",
          children: [
            {
              title: "Banking-Grade Compliance",
              shortTitle: "Example",
              type: "example",
              summary:
                "A payment processor integrates Vault with HSM to meet strict financial security standards."
            }
          ]
        }
      ]
    },
    {
      title: "Identity & Access Control",
      shortTitle: "Identity",
      type: "category",
      summary:
        "Granular identity-based access policies for applications and users.",
      children: [
        {
          title: "Enterprise Identity Integration",
          shortTitle: "Identity Sync",
          type: "feature",
          summary:
            "Integrates with LDAP, Active Directory, OIDC, and Kubernetes.",
          children: [
            {
              title: "AD-Based Access Control",
              shortTitle: "Example",
              type: "example",
              summary:
                "Engineers log in using company AD credentials and access only approved secrets."
            }
          ]
        },
        {
          title: "Policy-Based Access Governance",
          shortTitle: "Policies",
          type: "feature",
          summary:
            "Granular policies define who can access which secrets.",
          children: [
            {
              title: "Production vs Staging Control",
              shortTitle: "Example",
              type: "example",
              summary:
                "Developers can access staging secrets but are blocked from production credentials."
            }
          ]
        }
      ]
    },
    {
      title: "PKI & Certificate Management",
      shortTitle: "PKI",
      type: "category",
      summary:
        "Automated issuance and lifecycle management of TLS certificates.",
      children: [
        {
          title: "Automated Certificate Issuance",
          shortTitle: "Certificates",
          type: "feature",
          summary:
            "Automatically generates and manages TLS certificates.",
          children: [
            {
              title: "Kubernetes TLS Automation",
              shortTitle: "Example",
              type: "example",
              summary:
                "Vault automatically issues and renews certificates for hundreds of containerized services."
            }
          ]
        }
      ]
    },
    {
      title: "Platform & DevOps Integration",
      shortTitle: "Platform",
      type: "category",
      summary:
        "Multi-cloud deployment, container integration, and operational visibility.",
      children: [
        {
          title: "Kubernetes Integration",
          shortTitle: "K8s",
          type: "feature",
          summary:
            "Injects secrets securely into containers at runtime.",
          children: [
            {
              title: "CI/CD Secret Injection",
              shortTitle: "Example",
              type: "example",
              summary:
                "Containers retrieve secrets dynamically during deployment without embedding them in images."
            }
          ]
        },
        {
          title: "Multi-Cloud & Hybrid Deployment",
          shortTitle: "Multi-Cloud",
          type: "feature",
          summary:
            "Deploy Vault consistently across AWS, Azure, GCP, and on-prem.",
          children: [
            {
              title: "Cross-Cloud Central Control",
              shortTitle: "Example",
              type: "example",
              summary:
                "An enterprise operating across AWS and Azure uses Vault as a centralized secrets layer."
            }
          ]
        },
        {
          title: "Audit Logging",
          shortTitle: "Audit",
          type: "feature",
          summary:
            "Comprehensive logging of secret access and key usage.",
          children: [
            {
              title: "Regulatory Audit Reporting",
              shortTitle: "Example",
              type: "example",
              summary:
                "Vault provides full access logs to satisfy compliance investigations."
            }
          ]
        }
      ]
    }
  ]
};
