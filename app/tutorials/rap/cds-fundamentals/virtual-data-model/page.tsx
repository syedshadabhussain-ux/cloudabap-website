import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import CDSFundamentalsSidebar from "@/components/tutorials/CDSFundamentalsSidebar";
import TableBlock from "@/components/tutorials/TableBlock";
import VDMLayeringConcept from "@/components/tutorials/VDMLayeringConcept";

export default function Page() {
  return (
    <TutorialLayout
      title="Virtual Data Model (VDM): How SAP Models Business Data in S/4HANA"
      category="CDS Fundamentals"
      duration="15 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="Virtual Data Model (VDM)">
        <p>As SAP S/4HANA evolved, SAP faced a significant challenge.</p>

        <p>
          Thousands of applications, reports, APIs, analytical applications, and
          Fiori apps required access to the same business data.
        </p>

        <p>
          If every application directly accessed database tables, several
          problems would arise:
        </p>

        <ul>
          <li>Duplicate Business Logic</li>
          <li>Inconsistent Calculations</li>
          <li>Difficult Maintenance</li>
          <li>Upgrade Risks</li>
          <li>Tight Coupling with Database Structures</li>
        </ul>

        <p>
          SAP needed a standardized data access layer that could be reused
          across the entire system.
        </p>

        <p>
          This led to the introduction of the{" "}
          <strong>Virtual Data Model (VDM)</strong>.
        </p>

        <p>
          The Virtual Data Model is SAP's standardized CDS-based representation
          of business data.
        </p>

        <p>
          Instead of exposing database tables directly, SAP exposes business
          entities through CDS Views that follow strict modeling guidelines and
          naming conventions.
        </p>

        <p>Today, the VDM forms the foundation of:</p>

        <ul>
          <li>SAP Fiori Applications</li>
          <li>RAP Applications</li>
          <li>OData APIs</li>
          <li>Embedded Analytics</li>
          <li>Standard SAP APIs</li>
          <li>SAP S/4HANA Business Processes</li>
        </ul>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/VDM 1 CloudABAP.com.webp"
          alt="Virtual Data Model"
          caption="SAP's Virtual Data Model provides a standardized business-oriented data access layer built on CDS."
        />
      </ContentSection>

      <ContentSection title="What Does 'Virtual' Mean?">
        <p>
          The word <strong>Virtual</strong> often creates confusion.
        </p>

        <p>The VDM does not store data separately.</p>

        <p>Data continues to reside in the underlying database tables.</p>

        <p>
          The VDM simply provides a business-oriented representation of that
          data through CDS Views.
        </p>

        <p>
          Think of the VDM as a semantic layer that sits between database tables
          and applications.
        </p>

        <p>
          Instead of reading raw technical tables, applications consume
          business-friendly CDS entities.
        </p>
      </ContentSection>

      <ContentSection title="From Tables to Business Objects">
        <p>Consider a Sales Order.</p>

        <p>The underlying data may be distributed across multiple tables:</p>

        <ul>
          <li>VBAK</li>
          <li>VBAP</li>
          <li>KNA1</li>
          <li>MARA</li>
          <li>VBKD</li>
        </ul>

        <p>
          A developer could manually join these tables every time data is
          required.
        </p>

        <p>
          However, SAP provides a CDS-based representation of the Sales Order
          business object through the VDM.
        </p>

        <p>
          Applications consume the business object rather than dealing with
          individual tables.
        </p>

        <p>This improves consistency, maintainability, and reuse.</p>
      </ContentSection>

      <ContentSection title="Why SAP Created the VDM">
        <p>The VDM was designed to achieve several objectives:</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Standardization
        </h3>

        <p>Provide a single, consistent representation of business data.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Reusability
        </h3>

        <p>Allow multiple applications to consume the same CDS models.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Simplification
        </h3>

        <p>
          Hide technical database complexity behind business-oriented entities.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Upgrade Stability
        </h3>

        <p>
          Applications consume released CDS APIs rather than internal database
          tables.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Clean Core Compliance
        </h3>

        <p>
          Encourage developers to use released interfaces instead of directly
          accessing SAP implementation tables.
        </p>
      </ContentSection>

      <ContentSection title="VDM Layering Concept">
        <p>The Virtual Data Model follows a layered architecture.</p>

        <p>Each layer serves a specific purpose.</p>

        <p>This separation improves maintainability and promotes reuse.</p>

        <VDMLayeringConcept />
      </ContentSection>

      <ContentSection title="Basic Views">
        <p>Basic Views sit closest to database tables.</p>

        <p>
          They expose foundational business data and establish relationships
          between entities.
        </p>

        <p>Examples include:</p>

        <ul>
          <li>Product</li>
          <li>Customer</li>
          <li>Supplier</li>
          <li>Material</li>
          <li>Sales Document</li>
        </ul>

        <p>
          These views are primarily designed for reuse by higher-level CDS
          models.
        </p>
      </ContentSection>

      <ContentSection title="Composite Views">
        <p>
          Composite Views combine multiple Basic Views and introduce additional
          business logic.
        </p>

        <p>They often perform:</p>

        <ul>
          <li>Joins</li>
          <li>Calculations</li>
          <li>Aggregations</li>
          <li>Business Transformations</li>
        </ul>

        <p>
          Composite Views help create meaningful business structures from
          multiple underlying entities.
        </p>
      </ContentSection>

      <ContentSection title="Consumption Views">
        <p>Consumption Views sit at the top of the hierarchy.</p>

        <p>These views are designed specifically for consumption by:</p>

        <ul>
          <li>Fiori Applications</li>
          <li>OData Services</li>
          <li>Analytics</li>
          <li>APIs</li>
        </ul>

        <p>
          They contain UI-related annotations, search capabilities, filters, and
          consumption-specific metadata.
        </p>

        <p>
          This layered approach allows SAP to separate technical modeling from
          application-specific requirements.
        </p>
      </ContentSection>

      <ContentSection title="Understanding SAP's Naming Conventions">
        <p>SAP follows standardized naming conventions within the VDM.</p>

        <p>
          These conventions help developers immediately understand the purpose
          of a CDS View.
        </p>
      </ContentSection>

      <ContentSection title="I_* Views">
        <p>Interface Views.</p>

        <p>
          These are reusable business entities intended for consumption by other
          CDS Views.
        </p>

        <p>Examples:</p>

        <ul>
          <li>I_Product</li>
          <li>I_BusinessPartner</li>
          <li>I_Customer</li>
          <li>I_Supplier</li>
        </ul>

        <p>
          These are among the most commonly used released APIs in SAP S/4HANA.
        </p>
      </ContentSection>

      <ContentSection title="C_* Views">
        <p>Consumption Views.</p>

        <p>
          These are designed for direct consumption by applications, analytics,
          and reporting tools.
        </p>

        <p>Examples:</p>

        <ul>
          <li>C_SalesOrderItem</li>
          <li>C_BillingDocument</li>
        </ul>
      </ContentSection>

      <ContentSection title="A_* Views">
        <p>API Views.</p>

        <p>
          These views are specifically released as public APIs for external
          consumption.
        </p>

        <p>Examples:</p>

        <ul>
          <li>A_SalesOrder</li>
          <li>A_BusinessPartner</li>
        </ul>

        <p>These APIs are frequently used in RAP and ABAP Cloud development.</p>
      </ContentSection>

      <RealWorldExample title="Using I_Product in ABAP Cloud">
        <p>
          Imagine you need product information in an ABAP Cloud application.
        </p>

        <p>A traditional developer might attempt to read directly from MARA.</p>

        <p>
          However, MARA is an implementation table and is not released for ABAP
          Cloud development.
        </p>

        <p>Instead, SAP provides:</p>

        <p>
          <strong>I_Product</strong>
        </p>

        <p>
          This CDS View represents the Product business object and serves as the
          official released API.
        </p>

        <p>Using I_Product provides:</p>

        <ul>
          <li>Upgrade Stability</li>
          <li>Clean Core Compliance</li>
          <li>Business Semantics</li>
          <li>Future Compatibility</li>
        </ul>

        <p>This is the recommended approach in SAP S/4HANA and ABAP Cloud.</p>
      </RealWorldExample>

      <ContentSection title="VDM and RAP">
        <p>
          The relationship between RAP and the Virtual Data Model is extremely
          important.
        </p>

        <p>RAP Business Objects are built on top of CDS entities.</p>

        <p>
          SAP's standard business objects are already represented through VDM
          views.
        </p>

        <p>When building RAP applications, developers often:</p>

        <ul>
          <li>Consume released VDM views</li>
          <li>Extend VDM entities</li>
          <li>Create custom CDS entities following VDM principles</li>
        </ul>

        <p>
          This ensures consistency with SAP's architecture and Clean Core
          strategy.
        </p>
      </ContentSection>

      <ContentSection title="Why VDM Matters for ABAP Cloud">
        <p>
          ABAP Cloud development encourages developers to use released APIs
          rather than directly accessing SAP tables.
        </p>

        <p>Many of these released APIs are implemented as VDM CDS Views.</p>

        <p>As a result, understanding the VDM is essential for:</p>

        <ul>
          <li>RAP Development</li>
          <li>ABAP Cloud</li>
          <li>Clean Core Compliance</li>
          <li>SAP S/4HANA Extensibility</li>
        </ul>

        <p>
          Developers who understand the VDM can build applications that remain
          upgrade-safe and aligned with SAP's future direction.
        </p>
      </ContentSection>

      <ContentSection title="Why the VDM Matters for RAP">
        <p>RAP is built on top of CDS entities.</p>

        <p>
          In most cases, RAP Business Objects are not created directly on
          database tables.
        </p>

        <p>
          Instead, they are built on top of CDS entities that often follow VDM
          principles.
        </p>

        <p>This provides:</p>

        <ul>
          <li>Business Semantics</li>
          <li>Reuse</li>
          <li>Security</li>
          <li>Clean Core Compliance</li>
          <li>Future Compatibility</li>
        </ul>

        <p>
          Understanding the VDM therefore becomes essential for every RAP
          developer.
        </p>
      </ContentSection>

      <TableBlock
        title="Common VDM View Types"
        headers={["View Type", "Purpose", "Example"]}
        rows={[
          ["I_*", "Reusable Interface Views", "I_Product"],
          ["C_*", "Consumption Views", "C_SalesOrderItem"],
          ["A_*", "Released API Views", "A_BusinessPartner"],
        ]}
      />

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        One of the biggest shifts in SAP S/4HANA development is moving away from
        table-centric development to business-object-centric development.
        <br />
        <br />
        In modern SAP development, developers should think in terms of:
        <br />
        <ul className="mt-4 mb-4">
          <li>Product</li>
          <li>Business Partner</li>
          <li>Sales Order</li>
          <li>Supplier</li>
          <li>Accounting Document</li>
        </ul>
        <br />
        rather than:
        <br />
        <ul className="mt-4">
          <li>MARA</li>
          <li>KNA1</li>
          <li>VBAK</li>
          <li>LFA1</li>
          <li>BKPF</li>
        </ul>
        <br />
        The VDM enables this transformation by exposing business entities
        through released CDS APIs.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is SAP's Virtual Data Model (VDM)?"
          answer="The Virtual Data Model is SAP's CDS-based business representation of enterprise data. It provides reusable, business-oriented entities that can be consumed by applications, APIs, analytics, and RAP."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between I_* and C_* CDS Views?"
          answer="I_* Views are reusable Interface Views intended for reuse by other CDS entities, while C_* Views are Consumption Views designed for direct use by applications, analytics, and reporting tools."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is the VDM important for ABAP Cloud and RAP development?"
          answer="The VDM provides released business APIs that support Clean Core principles, upgrade stability, and future compatibility. RAP applications and ABAP Cloud developments are expected to consume released CDS entities rather than directly accessing implementation tables."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          The Virtual Data Model (VDM) is SAP's standardized CDS-based
          architecture for exposing business data.
        </p>

        <p>
          By organizing data into reusable Interface Views, Composite Views, and
          Consumption Views, SAP creates a consistent, secure, and
          upgrade-stable foundation for Fiori, RAP, APIs, and analytics.
        </p>

        <p>
          Understanding the VDM is essential for modern SAP developers because
          it shifts development away from technical database tables and toward
          business-oriented APIs and entities.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="CDS Language Components: Understanding DDL, QL, and DCL"
        prevHref="/tutorials/rap/cds-fundamentals/cds-language-components"
        nextTitle="CDS as the Foundation of RAP"
        nextHref="/tutorials/rap/cds-fundamentals/cds-foundation-of-rap"
      />
    </TutorialLayout>
  );
}
