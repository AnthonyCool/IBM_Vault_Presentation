// IBM Vault radial mindmap data source.
// Replace this object with your own hierarchy while preserving field names.
window.VAULT_MINDMAP_DATA = {
  title: "IBM Vault",
  shortTitle: "IBM Vault",
  type: "root",
  summary:
    "Secure enterprise vault platform for sensitive data governance, encryption, access controls, and compliance automation.",
  children: [
    {
      title: "Security & Encryption",
      shortTitle: "Security",
      type: "category",
      summary: "Protection controls that secure data at rest, in transit, and during access.",
      children: [
        {
          title: "Key Management",
          shortTitle: "Key Mgmt",
          type: "feature",
          summary: "Centralized lifecycle controls for encryption keys and automated rotation.",
          children: [
            {
              title: "HSM-backed key storage",
              shortTitle: "HSM",
              type: "example",
              summary: "Store and protect root keys inside certified hardware security modules."
            },
            {
              title: "Automated key rotation policies",
              shortTitle: "Rotation",
              type: "example",
              summary: "Define periodic or event-driven rotation with zero-touch operations."
            }
          ]
        },
        {
          title: "Data Encryption",
          shortTitle: "Encryption",
          type: "feature",
          summary: "Comprehensive encryption coverage across structured and unstructured data.",
          children: [
            {
              title: "Field-level encryption",
              shortTitle: "Field-level",
              type: "example",
              summary: "Protect sensitive fields such as PII while keeping non-sensitive data queryable."
            },
            {
              title: "Tokenization",
              shortTitle: "Tokenization",
              type: "example",
              summary: "Replace sensitive values with reversible or irreversible tokens."
            }
          ]
        },
        {
          title: "Access Hardening",
          shortTitle: "Hardening",
          type: "feature",
          summary: "Mechanisms that reduce risk from compromised identities or endpoints.",
          children: [
            {
              title: "MFA policy enforcement",
              shortTitle: "MFA",
              type: "example",
              summary: "Require adaptive MFA before privileged vault operations are executed."
            },
            {
              title: "Session anomaly detection",
              shortTitle: "Anomaly",
              type: "example",
              summary: "Continuously detect unusual behavior and automatically step up controls."
            }
          ]
        }
      ]
    },
    {
      title: "Access Management",
      shortTitle: "Access",
      type: "category",
      summary: "Granular identity and permission controls for applications, teams, and workflows.",
      children: [
        {
          title: "Role-Based Access Control",
          shortTitle: "RBAC",
          type: "feature",
          summary: "Assign least-privilege permissions by business role and context.",
          children: [
            {
              title: "Predefined security roles",
              shortTitle: "Role Sets",
              type: "example",
              summary: "Accelerate onboarding with curated role templates for common functions."
            },
            {
              title: "Delegated admin scopes",
              shortTitle: "Delegation",
              type: "example",
              summary: "Distribute administration without exposing global superuser privileges."
            }
          ]
        },
        {
          title: "Secrets Management",
          shortTitle: "Secrets",
          type: "feature",
          summary: "Secure storage and dynamic delivery of API keys, credentials, and certificates.",
          children: [
            {
              title: "Dynamic database credentials",
              shortTitle: "Dynamic DB",
              type: "example",
              summary: "Generate short-lived credentials on demand to limit blast radius."
            },
            {
              title: "Automated certificate issuance",
              shortTitle: "Certs",
              type: "example",
              summary: "Provision and renew TLS certificates with policy-based automation."
            }
          ]
        },
        {
          title: "Privileged Access Workflow",
          shortTitle: "PAM",
          type: "feature",
          summary: "Control high-risk operations through approvals and full activity visibility.",
          children: [
            {
              title: "Just-in-time access approvals",
              shortTitle: "JIT",
              type: "example",
              summary: "Grant elevated access only for approved windows and specific tasks."
            },
            {
              title: "Session recording",
              shortTitle: "Recording",
              type: "example",
              summary: "Capture and audit privileged sessions for forensic and compliance needs."
            }
          ]
        }
      ]
    },
    {
      title: "Compliance & Governance",
      shortTitle: "Compliance",
      type: "category",
      summary: "Policy controls and reporting that align vault operations with regulations.",
      children: [
        {
          title: "Audit & Monitoring",
          shortTitle: "Audit",
          type: "feature",
          summary: "Immutable logs and observability tools to track all vault interactions.",
          children: [
            {
              title: "Tamper-evident audit trails",
              shortTitle: "Audit Trail",
              type: "example",
              summary: "Maintain cryptographically verifiable logs for regulator confidence."
            },
            {
              title: "SIEM integrations",
              shortTitle: "SIEM",
              type: "example",
              summary: "Forward high-fidelity events to enterprise monitoring pipelines."
            }
          ]
        },
        {
          title: "Policy Enforcement",
          shortTitle: "Policy",
          type: "feature",
          summary: "Centralized guardrails to ensure consistent data handling and retention.",
          children: [
            {
              title: "Geofencing controls",
              shortTitle: "Geofencing",
              type: "example",
              summary: "Restrict vault usage based on jurisdiction and data residency rules."
            },
            {
              title: "Retention and purge lifecycle",
              shortTitle: "Retention",
              type: "example",
              summary: "Automate retention windows and defensible deletion procedures."
            }
          ]
        },
        {
          title: "Regulatory Readiness",
          shortTitle: "Readiness",
          type: "feature",
          summary: "Capabilities mapped to controls used by global privacy and security standards.",
          children: [
            {
              title: "GDPR data handling controls",
              shortTitle: "GDPR",
              type: "example",
              summary: "Operationalize consent, minimization, and right-to-erasure requirements."
            },
            {
              title: "SOC 2 evidence exports",
              shortTitle: "SOC 2",
              type: "example",
              summary: "Generate auditor-ready reports showing control effectiveness."
            }
          ]
        }
      ]
    },
    {
      title: "Operations & Integration",
      shortTitle: "Operations",
      type: "category",
      summary: "Deployment, scalability, and ecosystem integrations for enterprise adoption.",
      children: [
        {
          title: "Platform Integration",
          shortTitle: "Integration",
          type: "feature",
          summary: "Connect IBM Vault to CI/CD, IAM, cloud, and service platforms.",
          children: [
            {
              title: "Kubernetes sidecar injection",
              shortTitle: "K8s",
              type: "example",
              summary: "Deliver secrets to workloads securely through sidecar agents."
            },
            {
              title: "CI/CD secret retrieval",
              shortTitle: "CI/CD",
              type: "example",
              summary: "Inject ephemeral secrets into build pipelines without hardcoding."
            }
          ]
        },
        {
          title: "Scalability & Reliability",
          shortTitle: "Scalability",
          type: "feature",
          summary: "Architectural controls for high availability and predictable performance.",
          children: [
            {
              title: "Multi-region replication",
              shortTitle: "Replication",
              type: "example",
              summary: "Replicate vault state across regions to improve resilience and locality."
            },
            {
              title: "Auto-healing clusters",
              shortTitle: "Auto-heal",
              type: "example",
              summary: "Recover from node failures with minimal manual intervention."
            }
          ]
        },
        {
          title: "Operational Intelligence",
          shortTitle: "Insights",
          type: "feature",
          summary: "Dashboards and analytics that help teams optimize vault usage and cost.",
          children: [
            {
              title: "Usage trend dashboards",
              shortTitle: "Dashboards",
              type: "example",
              summary: "Track growth, request volume, and policy violations in real time."
            },
            {
              title: "Capacity forecasting",
              shortTitle: "Forecast",
              type: "example",
              summary: "Predict infrastructure needs from historical demand and planned growth."
            }
          ]
        }
      ]
    }
  ]
};
