import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import PrevNext from "@/components/tutorials/PrevNext";
import TableBlock from "@/components/tutorials/TableBlock";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";

export default function IntroductionToRAPAndABAPCloudPage() {
  return (
    <TutorialLayout
      title="Introduction to RAP and ABAP Cloud"
      category="Fundamentals"
      duration="25 min read"
    >
      <ContentSection title="Introduction to RAP and ABAP Cloud">
        <p>
          The ABAP RESTful Application Programming Model (RAP) is SAP's
          strategic development model for building modern transactional
          applications, APIs and extensions in SAP landscapes.
        </p>

        <p>
          RAP is a core pillar of ABAP Cloud and represents SAP's long-term
          direction for enterprise application development. Whether you are
          developing on SAP BTP ABAP Environment (Steampunk), SAP S/4HANA Cloud
          Public Edition, SAP S/4HANA Cloud Private Edition or SAP S/4HANA
          On-Premise 2022+, RAP is the recommended programming model for new
          development projects.
        </p>

        <p>
          Unlike classical ABAP development where developers manually create
          database tables, business logic, OData services, authorization checks
          and UI integrations, RAP provides a model-driven architecture that
          standardizes the entire application lifecycle.
        </p>

        <p>
          RAP applications are built around Business Objects and use a
          collection of development artifacts such as CDS View Entities,
          Behavior Definitions, Behavior Implementations, Projection Views,
          Service Definitions and Service Bindings.
        </p>

        <p>
          The result is a development model that is cloud-ready, upgrade-stable,
          API-first and aligned with SAP's Clean Core strategy.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP Architechture Overview CloudABAP.com.png"
        alt="RAP Architecture Overview"
        caption="High-Level Architecture of the ABAP RESTful Application Programming Model"
      />

      <InfoBox type="info" title="Important Concept">
        <p>RAP is not a programming language.</p>

        <p>
          ABAP remains the programming language. RAP is a development model and
          architectural framework that defines how enterprise-grade business
          applications should be designed, implemented and exposed in modern SAP
          systems.
        </p>

        <p>
          Think of RAP as SAP's successor to traditional ABAP application
          development rather than a replacement for ABAP itself.
        </p>
      </InfoBox>

      <ContentSection title="Why Did SAP Create RAP?">
        <p>
          To understand RAP, we first need to understand the challenges of
          classical ABAP development.
        </p>

        <p>
          Traditional SAP applications were built using Dynpro screens, function
          modules, custom reports, direct database access and SAP Gateway
          services. While extremely powerful, these applications were often
          tightly coupled to SAP internals and difficult to adapt during
          upgrades.
        </p>

        <p>
          As SAP moved toward cloud-native software, new architectural
          requirements emerged:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Upgrade Stability</li>
          <li>Cloud Readiness</li>
          <li>API-First Architecture</li>
          <li>Clean Core Compliance</li>
          <li>Standardized Service Exposure</li>
          <li>Business Object Orientation</li>
          <li>Fiori-First User Experience</li>
          <li>Lifecycle Consistency</li>
          <li>Reduced Custom Framework Development</li>
        </ul>

        <p className="mt-4">
          RAP was introduced to address these requirements and provide a single
          strategic programming model across all SAP cloud and on-premise
          environments.
        </p>
      </ContentSection>

      <ContentSection title="RAP in Real SAP Applications">
        <p>
          A common misconception is that RAP is only used for custom
          developments.
        </p>

        <p>
          SAP itself increasingly develops new business applications using RAP.
          Many SAP S/4HANA Cloud Public Edition applications use RAP Business
          Objects as their transactional foundation.
        </p>

        <p>Examples include:</p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Procurement Applications</li>
          <li>Supplier Management Apps</li>
          <li>Business Configuration Applications</li>
          <li>Workflow Configuration Apps</li>
          <li>Extensibility Applications</li>
          <li>Custom Business Object Applications</li>
        </ul>

        <p className="mt-4">
          As architects, this is important because adopting RAP means aligning
          custom development with the same architecture SAP uses internally.
        </p>
      </ContentSection>

      <ArchitectNote>
        <p>
          Many developers think RAP is simply a framework for generating OData
          services.
        </p>

        <p>Architects view RAP differently.</p>

        <p>
          RAP represents SAP's transition from Table-Centric Development to
          Business Object-Centric Development.
        </p>

        <p>
          This shift is one of the most important architectural changes
          introduced since SAP HANA and is a foundational pillar of SAP's Clean
          Core strategy.
        </p>
      </ArchitectNote>

      <ContentSection title="The Evolution of SAP Technology">
        <p>RAP did not appear overnight.</p>

        <p>
          It is the result of more than five decades of SAP technology evolution
          and lessons learned from multiple generations of ERP architecture.
        </p>

        <p>
          Understanding this evolution helps explain why SAP introduced ABAP
          Cloud, released APIs and RAP as the future development model.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP & Cloud ABAP Evolution CloudABAP.com.png"
        alt="SAP Evolution"
        caption="Evolution of SAP Technology leading to ABAP Cloud and RAP"
      />

      <ContentSection title="From SAP R/1 to RAP">
        <p>
          SAP R/1 introduced centralized enterprise processing using a
          single-tier architecture.
        </p>

        <p>
          SAP R/2 expanded this model to large-scale mainframe environments and
          supported enterprise-grade transaction processing.
        </p>

        <p>
          SAP R/3 introduced the famous three-tier architecture consisting of
          Presentation, Application and Database layers, which dominated
          enterprise software development for nearly two decades.
        </p>

        <p>
          SAP NetWeaver added integration capabilities and service-oriented
          architecture concepts that enabled systems to communicate through
          standardized interfaces.
        </p>

        <p>
          SAP HANA transformed application development through in-memory
          computing, code pushdown and real-time analytics.
        </p>

        <p>
          SAP S/4HANA simplified the ERP data model and introduced CDS Views,
          OData services and SAP Fiori as strategic technologies.
        </p>

        <p>
          ABAP Cloud introduced released APIs, strict development rules and
          upgrade-safe extensibility.
        </p>

        <p>
          RAP represents the culmination of this journey by providing a unified
          Business Object-centric programming model for transactional
          applications, APIs and cloud-ready extensions.
        </p>
      </ContentSection>

      <ContentSection title="ABAP Cloud Building Blocks">
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>
            <strong>Core Data Services (CDS)</strong> for semantic data modeling
          </li>
          <li>
            <strong>RAP</strong> for transactional processing and business
            objects
          </li>
          <li>
            <strong>ABAP for Cloud Development</strong> language version
          </li>
          <li>
            <strong>Released APIs</strong> for stable SAP integration
          </li>
          <li>
            <strong>Released Extension Points</strong> for upgrade-safe
            enhancements
          </li>
          <li>
            <strong>ABAP Development Tools (ADT)</strong> in Eclipse
          </li>
        </ul>

        <p className="mt-4">
          RAP serves as the transactional engine of ABAP Cloud and provides the
          architecture, runtime and development framework used to implement
          modern SAP business applications.
        </p>
      </ContentSection>

      {/* Shadab */}

      <ContentSection title="Advanced RAP Concepts">
        <p>RAP extends far beyond CRUD applications.</p>

        <p>
          Throughout this learning path you will gradually move from basic
          Business Objects to advanced enterprise-grade capabilities.
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Managed and Unmanaged RAP</li>
          <li>Draft Handling</li>
          <li>Actions and Determinations</li>
          <li>Validations</li>
          <li>Late Numbering</li>
          <li>Custom Entities</li>
          <li>Side Effects</li>
          <li>Feature Control</li>
          <li>EML (Entity Manipulation Language)</li>
          <li>BDL (Behavior Definition Language)</li>
          <li>Business Events</li>
          <li>Authorization Framework</li>
          <li>Performance Optimization</li>
        </ul>
      </ContentSection>

      <ContentSection title="EML and BDL at a Glance">
        <p>
          Two RAP concepts that frequently appear in architect interviews are
          EML and BDL.
        </p>

        <p>
          BDL (Behavior Definition Language) is used to define the behavior of a
          Business Object. It specifies operations such as Create, Update,
          Delete, Actions, Determinations, Validations and Authorizations.
        </p>

        <p>
          EML (Entity Manipulation Language) is the API used by ABAP developers
          to interact with RAP Business Objects programmatically.
        </p>

        <CodeBlock
          title="Simple EML Example"
          code={`MODIFY ENTITIES OF zi_purchaseorder
  ENTITY PurchaseOrder
  CREATE FROM lt_po_data
  FAILED DATA(lt_failed)
  REPORTED DATA(lt_reported).`}
        />

        <p>
          Think of EML as the RAP equivalent of calling a BAPI, except that it
          operates directly on Business Objects and automatically respects RAP
          transactional behavior.
        </p>
      </ContentSection>

      <ContentSection title="Where RAP Fits in ABAP Cloud">
        <p>
          RAP is the transactional pillar of ABAP Cloud. It provides a
          model-driven architecture for implementing business objects,
          transactional behavior and service exposure.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP in ABAP Cloud CloudABAP.com.png"
        alt="RAP Architecture"
        caption="High-Level RAP Architecture"
      />

      <TableBlock
        title="ABAP Cloud Use Cases"
        headers={["Use Case", "Technology", "Purpose"]}
        rows={[
          ["Transactional", "RAP", "Business transactions and CRUD operations"],
          [
            "Analytical",
            "CDS + Embedded Analytics",
            "KPIs, reports and dashboards",
          ],
          ["Integration", "OData, HTTP, Events", "System integration"],
        ]}
      />

      <ContentSection title="RAP Architecture Layers">
        <ul>
          <li>
            <strong>Data Model</strong> - CDS View Entities
          </li>
          <li>
            <strong>Behavior</strong> - Business Logic
          </li>
          <li>
            <strong>Projection</strong> - Consumption Layer
          </li>
          <li>
            <strong>Service Definition</strong> - Business Service
          </li>
          <li>
            <strong>Service Binding</strong> - OData Exposure
          </li>
          <li>
            <strong>Consumption</strong> - Fiori, APIs, Mobile
          </li>
        </ul>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP Development Flow CloudABAP.com.png"
        alt="RAP Development Flow"
        caption="End-to-End RAP Development Flow"
      />

      <ContentSection title="Core RAP Artifacts">
        <p>
          A RAP application is built using a series of development artifacts
          that work together to model business data, implement business behavior
          and expose services for consumption.
        </p>

        <p>
          Understanding these artifacts is critical because every RAP
          application follows the same development pattern:
        </p>

        <InfoBox type="info" title="End-to-End RAP Development Flow">
          <ul className="list-disc pl-6 space-y-2">
            <li>Database Table (TABL)</li>
            <li>CDS View Entity (DDLS)</li>
            <li>Behavior Definition (BDEF)</li>
            <li>Behavior Implementation (CLAS)</li>
            <li>Projection View (DDLS)</li>
            <li>Projection Behavior (BDEF)</li>
            <li>Service Definition (SRVD)</li>
            <li>Service Binding (SRVB)</li>
            <li>Fiori Elements / SAPUI5 Application</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <CodeBlock
        title="1. Database Table (TABL)"
        code={`define table zemployee {

  key client      : abap.clnt not null;
  key employee_id : abap.numc(10) not null;

  employee_name   : abap.char(80);
  department      : abap.char(40);

}`}
      />

      <InfoBox type="info" title="Purpose of Database Table">
        Physical persistence layer that stores business data.
      </InfoBox>

      <CodeBlock
        title="2. Root CDS View Entity (DDLS)"
        code={`define root view entity ZI_EMPLOYEE
  as select from zemployee
{
  key employee_id,
      employee_name,
      department
}`}
      />

      <InfoBox type="info" title="Purpose of CDS View Entity">
        Creates the semantic business data model and acts as the root of the RAP
        Business Object.
      </InfoBox>

      <CodeBlock
        title="3. Behavior Definition (BDEF)"
        code={`managed implementation in class zbp_i_employee unique;

define behavior for ZI_EMPLOYEE
persistent table zemployee
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}`}
      />

      <InfoBox type="info" title="Purpose of Behavior Definition">
        Defines business behavior such as Create, Update, Delete, Actions,
        Determinations and Validations.
      </InfoBox>

      <CodeBlock
        title="4. Behavior Implementation Class (CLAS)"
        code={`CLASS lhc_employee DEFINITION
  INHERITING FROM cl_abap_behavior_handler.

  PRIVATE SECTION.

    METHODS validateDepartment
      FOR VALIDATE ON SAVE
      IMPORTING keys.

ENDCLASS.`}
      />

      <InfoBox type="info" title="Purpose of Behavior Implementation">
        Contains custom business logic that cannot be handled automatically by
        the RAP framework.
      </InfoBox>

      <CodeBlock
        title="5. Projection View (DDLS)"
        code={`define root view entity ZC_EMPLOYEE
  provider contract transactional_query
  as projection on ZI_EMPLOYEE
{
  key employee_id,
      employee_name,
      department
}`}
      />

      <InfoBox type="info" title="Purpose of Projection View">
        Provides a consumer-specific view of the Business Object and acts as the
        API contract for applications.
      </InfoBox>

      <CodeBlock
        title="6. Projection Behavior (BDEF)"
        code={`projection;

define behavior for ZC_EMPLOYEE
{
  use create;
  use update;
  use delete;
}`}
      />

      <InfoBox type="info" title="Purpose of Projection Behavior">
        Controls which operations are exposed to consumers.
      </InfoBox>

      <CodeBlock
        title="7. Service Definition (SRVD)"
        code={`define service ZUI_EMPLOYEE {

  expose ZC_EMPLOYEE
    as Employee;

}`}
      />

      <InfoBox type="info" title="Purpose of Service Definition">
        Defines which RAP Business Objects are exposed as services.
      </InfoBox>

      <CodeBlock
        title="8. Service Binding (SRVB)"
        code={`Name          : ZUI_EMPLOYEE_O4
Binding Type  : OData V4 - UI
Service       : ZUI_EMPLOYEE`}
      />

      <InfoBox type="info" title="Purpose of Service Binding">
        Publishes the service using OData and enables Fiori Elements preview.
      </InfoBox>

      <TableBlock
        title="RAP Artifact Summary"
        headers={["Artifact", "Repository Type", "Purpose"]}
        rows={[
          ["Database Table", "TABL", "Persistence Layer"],
          ["CDS View Entity", "DDLS", "Data Model"],
          ["Behavior Definition", "BDEF", "Business Behavior"],
          ["Behavior Implementation", "CLAS", "Custom Logic"],
          ["Projection View", "DDLS", "Consumer Model"],
          ["Projection Behavior", "BDEF", "Expose Operations"],
          ["Service Definition", "SRVD", "Expose Service"],
          ["Service Binding", "SRVB", "Publish OData Service"],
        ]}
      />

      <ContentSection title="Read-Only vs Transactional Applications">
        <p>
          One of the most important architectural decisions in RAP is
          determining whether the application is <strong>Read-Only</strong> or
          <strong> Transactional</strong>. This decision impacts the number of
          RAP artifacts required, the complexity of the solution, performance,
          maintainability and long-term extensibility.
        </p>

        <p>
          According to SAP's ABAP Cloud development model, RAP supports both
          analytical and transactional use cases. Not every application requires
          create, update or delete capabilities. In many enterprise scenarios,
          users only need to consume and analyze business data.
        </p>

        <p>
          A common mistake among beginners is assuming that every RAP
          application requires a Behavior Definition and Behavior
          Implementation. In reality, many successful RAP applications are
          implemented as read-only solutions using only CDS views, projections
          and service exposure.
        </p>

        <InfoBox type="info" title="Architect Perspective">
          Before creating a Behavior Definition, ask yourself:
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Will users create new business records?</li>
            <li>Will users modify existing data?</li>
            <li>
              Will users execute business actions such as Approve or Reject?
            </li>
            <li>Are validations and determinations required?</li>
            <li>Is there a business transaction lifecycle?</li>
          </ul>
          <p className="mt-3">
            If the answer to all these questions is <strong>No</strong>, a
            Read-Only RAP application is often sufficient.
          </p>
        </InfoBox>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/Read Only vs Transactional app CloudABAP.com.png"
        alt="Read Only vs Transactional"
        caption="Read-Only RAP vs Transactional RAP"
      />

      <RealWorldExample title="Example 1: Purchase Order Analytics Dashboard (Read-Only RAP)">
        <p>
          Consider a dashboard displaying Purchase Orders by Purchasing
          Organization, Supplier and Net Order Value.
        </p>

        <p>
          Users only need to analyze information. They do not create or modify
          Purchase Orders from this application.
        </p>

        <p>
          In this scenario, SAP recommends using CDS View Entities, Projection
          Views, Service Definitions and Service Bindings without any Behavior
          Definition.
        </p>
      </RealWorldExample>

      <RealWorldExample title="Example 2: CAPA Management Application (Transactional RAP)">
        <p>
          Consider a CAPA (Corrective and Preventive Action) application where
          users create CAPA records, assign root causes, perform corrective
          actions, approve investigations and finally close the CAPA.
        </p>

        <p>
          This application contains business transactions, lifecycle management,
          validations, approvals and status changes.
        </p>

        <p>
          Such a solution requires a complete RAP Business Object with Behavior
          Definitions, Actions, Determinations, Validations and Service
          Exposure.
        </p>
      </RealWorldExample>

      <InfoBox type="tip" title="SAP ABAP Cloud Perspective">
        SAP categorizes ABAP Cloud use cases into:
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Analytical Use Cases (OLAP)</strong> – Reporting,
            dashboards, KPIs and embedded analytics.
          </li>
          <li>
            <strong>Transactional Use Cases (OLTP)</strong> – Business
            applications that create, update and process business data.
          </li>
        </ul>
        <p className="mt-3">
          RAP is the strategic programming model for implementing transactional
          business applications in ABAP Cloud.
        </p>
      </InfoBox>

      <ArchitectNote>
        <p>
          From an architecture standpoint, every Transactional RAP application
          is built on top of a Read-Only foundation.
        </p>

        <p>
          The CDS data model remains the same. Transactional RAP simply adds
          behavior, validations, determinations, actions, draft handling,
          authorization control and transactional consistency.
        </p>

        <p>
          This is why SAP often describes Transactional RAP as an extension of
          the Read-Only model rather than a completely separate architecture.
        </p>
      </ArchitectNote>

      <ContentSection title="Business Objects, Associations and Compositions">
        <p>
          The most important concept in RAP is the{" "}
          <strong>Business Object (BO)</strong>. RAP is not table-centric like
          traditional ABAP development. Instead, RAP is designed around business
          concepts such as Purchase Orders, Sales Orders, Employees, Suppliers,
          CAPA Records and Service Requests.
        </p>

        <p>
          A Business Object represents a complete business entity together with
          its data, relationships, lifecycle, business rules and transactional
          behavior. In RAP, everything revolves around the Business Object.
        </p>

        <p>
          From an architectural perspective, a Business Object acts as a
          consistency boundary. All business validations, authorizations,
          determinations, actions and transactional processing are executed
          through the Business Object.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/Business Object CloudABAP.com.png"
        alt="RAP Business Object"
        caption="Business Objects are the foundation of RAP applications"
      />

      <InfoBox type="info" title="Common SAP Business Objects">
        <ul className="list-disc pl-6 space-y-2">
          <li>Purchase Order</li>
          <li>Sales Order</li>
          <li>Business Partner</li>
          <li>Supplier</li>
          <li>Employee</li>
          <li>Material</li>
          <li>CAPA Record</li>
          <li>Service Request</li>
        </ul>
      </InfoBox>

      <RealWorldExample title="Purchase Order Business Object">
        <p>Consider a Purchase Order in SAP S/4HANA.</p>

        <p>
          A Purchase Order is not just a single database table. It consists of a
          Purchase Order Header, Purchase Order Items, Schedule Lines, Account
          Assignments and Supplier information.
        </p>

        <p>
          RAP groups these related entities into a single Business Object so
          that the framework can guarantee transactional consistency and
          business integrity.
        </p>
      </RealWorldExample>

      <ContentSection title="Root Entity and Child Entities">
        <p>
          Every RAP Business Object starts with a <strong>Root Entity</strong>.
          The root entity acts as the entry point into the Business Object and
          controls lifecycle management, locking, authorization and
          transactional consistency.
        </p>

        <p>
          Additional entities are typically modeled as child entities that are
          connected to the root using compositions.
        </p>
      </ContentSection>

      <InfoBox type="tip" title="Architect Perspective">
        Think of the Root Entity as the CEO of the Business Object. All
        important business decisions flow through it. Child entities should not
        be treated as independent business objects when they belong to the same
        business transaction.
      </InfoBox>

      <ContentSection title="Association vs Composition">
        <p>
          One of the most frequently asked RAP interview topics is the
          difference between Associations and Compositions.
        </p>

        <p>
          Although both represent relationships between entities, they model
          very different business semantics.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Association">
        <p>
          Associations represent a loose relationship between two independent
          business objects.
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Objects can exist independently.</li>
          <li>Lifecycle is not shared.</li>
          <li>Deleting one object does not delete the other.</li>
          <li>Used mainly for navigation and lookups.</li>
        </ul>

        <p className="mt-3">Example: Purchase Order → Business Partner</p>
      </InfoBox>

      <InfoBox type="success" title="Composition">
        <p>Composition represents strong ownership between entities.</p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Child lifecycle depends on the parent.</li>
          <li>Parent owns the child data.</li>
          <li>Deletion of parent removes child records.</li>
          <li>Forms a single transactional unit.</li>
        </ul>

        <p className="mt-3">Example: Purchase Order → Purchase Order Items</p>
      </InfoBox>

      <RealWorldExample title="Association vs Composition in SAP Projects">
        <p>
          A Purchase Order Item cannot exist without a Purchase Order Header.
          Therefore the relationship is modeled using a Composition.
        </p>

        <p>
          However, the Supplier associated with the Purchase Order is an
          independent Business Object that exists regardless of whether the
          Purchase Order exists. Therefore this relationship is modeled using an
          Association.
        </p>
      </RealWorldExample>

      <ArchitectNote>
        <p>
          A good RAP data model is primarily about identifying Business Object
          boundaries correctly.
        </p>

        <p>
          Most design mistakes in RAP originate from incorrectly identifying
          ownership relationships and choosing Associations where Compositions
          should be used, or vice versa.
        </p>

        <p>Before writing any CDS code, architects should first identify:</p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Root Entity</li>
          <li>Child Entities</li>
          <li>Ownership Boundaries</li>
          <li>Transaction Boundaries</li>
          <li>Business Lifecycle</li>
        </ul>
      </ArchitectNote>

      <ContentSection title="Managed vs Unmanaged RAP">
        <p>
          One of the most important implementation decisions in RAP is whether a
          Business Object should use the <strong>Managed</strong> or
          <strong> Unmanaged</strong> programming model.
        </p>

        <p>
          This decision affects development effort, maintainability, cloud
          readiness, upgrade stability and long-term ownership of the solution.
        </p>

        <p>
          SAP strongly recommends Managed RAP for new developments because the
          RAP framework automatically handles persistence, transactional
          consistency, locking, authorization and save processing.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/Managed vs Unmanaged CloudABAP.com.png"
        alt="Managed vs Unmanaged RAP"
        caption="Managed RAP vs Unmanaged RAP Development Approaches"
      />

      <InfoBox type="success" title="Managed RAP - SAP Recommended Approach">
        <p>
          Managed RAP is designed for greenfield application development and is
          the preferred approach in ABAP Cloud and SAP S/4HANA Public Cloud.
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Framework automatically handles CRUD operations.</li>
          <li>No manual database persistence coding required.</li>
          <li>Supports Clean Core principles.</li>
          <li>Reduced development effort.</li>
          <li>Better maintainability and upgrade stability.</li>
          <li>Ideal for new custom applications.</li>
        </ul>
      </InfoBox>

      <RealWorldExample title="Managed RAP Example - Employee Management">
        <p>
          Consider a new Employee Management application being developed in SAP
          S/4HANA Public Cloud.
        </p>

        <p>
          The application stores employee master data in custom persistence
          tables and follows standard create, update and delete operations.
        </p>

        <p>
          In this scenario, Managed RAP is the ideal choice because the
          framework automatically handles persistence and transactional
          processing.
        </p>
      </RealWorldExample>

      <InfoBox
        type="warning"
        title="Unmanaged RAP - Legacy Integration Approach"
      >
        <p>
          Unmanaged RAP is primarily intended for brownfield scenarios where
          existing business logic already exists and cannot be replaced easily.
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Developer controls persistence logic.</li>
          <li>Existing BAPIs can be reused.</li>
          <li>Legacy function modules can be integrated.</li>
          <li>Custom save logic can be preserved.</li>
          <li>Higher implementation complexity.</li>
          <li>More code ownership for the development team.</li>
        </ul>
      </InfoBox>

      <RealWorldExample title="Unmanaged RAP Example - Sales Order Processing">
        <p>
          Consider a customer with an existing Sales Order solution built over
          many years using custom classes, BAPIs and enhancement frameworks.
        </p>

        <p>
          Rewriting all existing business logic into Managed RAP may be
          expensive and risky.
        </p>

        <p>
          In such situations, Unmanaged RAP can expose the existing logic
          through a modern RAP service layer while preserving proven business
          processes.
        </p>
      </RealWorldExample>

      <ContentSection title="How SAP Views Managed and Unmanaged RAP">
        <p>
          SAP does not position Managed and Unmanaged RAP as competing
          approaches. Instead, they solve different business problems.
        </p>

        <p>
          Managed RAP is intended for new development scenarios, while Unmanaged
          RAP provides a migration path for existing investments and legacy
          applications.
        </p>
      </ContentSection>

      <ArchitectNote>
        <p>
          The most common architecture mistake is choosing Unmanaged RAP simply
          because developers are familiar with traditional ABAP coding.
        </p>

        <p>
          For new ABAP Cloud developments, Managed RAP should always be the
          default choice unless a clear business requirement forces reuse of
          existing persistence logic.
        </p>

        <p>
          Every unnecessary Unmanaged implementation increases development
          effort, testing effort and long-term maintenance costs.
        </p>
      </ArchitectNote>

      <InfoBox type="info" title="Decision Framework for Architects">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Building a completely new application?
            <strong> Choose Managed RAP.</strong>
          </li>

          <li>
            Working in SAP S/4HANA Public Cloud?
            <strong> Choose Managed RAP.</strong>
          </li>

          <li>
            Need to reuse existing BAPIs?
            <strong> Consider Unmanaged RAP.</strong>
          </li>

          <li>
            Existing legacy persistence logic must remain unchanged?
            <strong> Consider Unmanaged RAP.</strong>
          </li>

          <li>
            Want lowest maintenance effort?
            <strong> Choose Managed RAP.</strong>
          </li>
        </ul>
      </InfoBox>

      <ContentSection title="How RAP Runtime Works">
        <p>
          Many developers learn how to create CDS Views, Behavior Definitions
          and Service Bindings, but very few understand what actually happens
          when a user clicks the <strong>Save</strong> button in a RAP
          application.
        </p>

        <p>
          Understanding the RAP Runtime is important because it explains how SAP
          transforms a simple user action into a fully managed business
          transaction while ensuring consistency, authorization, validation and
          performance.
        </p>

        <p>
          From a technical perspective, RAP Runtime acts as the orchestration
          layer between the UI, OData services, Business Objects and the SAP
          HANA database.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP Runtime Working CloudABAP.com.png"
        alt="RAP Runtime Architecture"
        caption="How Requests Travel Through the RAP Runtime"
      />

      <InfoBox type="info" title="What Happens When a User Clicks Save?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>User submits data from a Fiori application.</li>
          <li>OData request is sent to SAP Gateway.</li>
          <li>SAP Gateway routes the request.</li>
          <li>SADL interprets the CDS model.</li>
          <li>RAP Runtime executes business behavior.</li>
          <li>Validations and determinations run.</li>
          <li>Transaction Manager coordinates persistence.</li>
          <li>Changes are committed to SAP HANA.</li>
        </ol>
      </InfoBox>

      <ContentSection title="Step 1 - Fiori Application">
        <p>
          Every RAP request normally starts from a SAP Fiori Elements or SAPUI5
          application.
        </p>

        <p>
          The UI never directly accesses database tables. Instead, it consumes
          an OData service exposed through RAP.
        </p>

        <p>
          This separation between UI and backend is one of the foundations of
          SAP's Clean Core strategy.
        </p>
      </ContentSection>

      <ContentSection title="Step 2 - OData Service and SAP Gateway">
        <p>
          The request reaches SAP Gateway through an OData endpoint generated
          from the Service Binding.
        </p>

        <p>
          SAP Gateway acts as the communication layer between external consumers
          and RAP Business Objects.
        </p>

        <InfoBox type="tip" title="Think Like an Architect">
          SAP Gateway understands protocols such as OData. RAP understands
          business behavior. This separation allows SAP to evolve business logic
          independently from communication technologies.
        </InfoBox>
      </ContentSection>

      <ContentSection title="Step 3 - SADL Processing">
        <p>
          SADL (Service Adaptation Definition Language) is one of the most
          important runtime components in RAP.
        </p>

        <p>
          SADL automatically translates OData requests into CDS-based operations
          and generates optimized database access logic.
        </p>

        <InfoBox type="info" title="Responsibilities of SADL">
          <ul className="list-disc pl-6 space-y-2">
            <li>Process OData requests</li>
            <li>Resolve CDS associations</li>
            <li>Handle filtering and sorting</li>
            <li>Optimize database access</li>
            <li>Generate SQL for SAP HANA</li>
            <li>Reduce custom coding requirements</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <RealWorldExample title="Example: Supplier Search">
        <p>Suppose a user searches for suppliers beginning with "ABC".</p>

        <p>
          The filter is sent through OData, interpreted by SADL and pushed down
          to SAP HANA. Only the required records are returned.
        </p>

        <p>
          This is one of the reasons RAP applications scale better than
          traditional report-based developments.
        </p>
      </RealWorldExample>

      <ContentSection title="Step 4 - RAP Business Object Runtime">
        <p>After SADL resolves the request, the RAP Runtime takes over.</p>

        <p>
          The RAP Runtime is responsible for executing Business Object behavior
          defined in Behavior Definitions and Behavior Implementations.
        </p>

        <InfoBox type="info" title="Responsibilities of RAP Runtime">
          <ul className="list-disc pl-6 space-y-2">
            <li>Execute Create, Update and Delete operations</li>
            <li>Run Validations</li>
            <li>Run Determinations</li>
            <li>Execute Actions</li>
            <li>Handle Draft Processing</li>
            <li>Perform Authorization Checks</li>
            <li>Coordinate Save Processing</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <ContentSection title="Step 5 - RAP Transaction Manager">
        <p>
          The RAP Transaction Manager ensures consistency across the entire
          Business Object.
        </p>

        <p>
          Multiple entities may participate in the same transaction. Either all
          changes are saved successfully or all changes are rolled back.
        </p>
      </ContentSection>

      <RealWorldExample title="Purchase Order Example">
        <p>Consider a Purchase Order containing one Header and ten Items.</p>

        <p>
          If saving Item 7 fails due to a validation error, the entire Purchase
          Order transaction is rolled back.
        </p>

        <p>This guarantees data consistency across the Business Object.</p>
      </RealWorldExample>

      <ContentSection title="The RAP Save Sequence">
        <p>
          One of the most important architect-level concepts in RAP is the Save
          Sequence.
        </p>

        <p>
          During save processing, RAP executes a predefined sequence of steps to
          ensure business consistency.
        </p>

        <InfoBox type="warning" title="Typical RAP Save Sequence">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Authorization Checks</li>
            <li>Prechecks</li>
            <li>Validations</li>
            <li>Determinations</li>
            <li>Action Processing</li>
            <li>Persistence Processing</li>
            <li>Database Commit</li>
          </ol>
        </InfoBox>
      </ContentSection>

      <ContentSection title="Read Requests vs Modify Requests">
        <p>Not every request travels through the complete runtime.</p>

        <p>
          Read operations are relatively lightweight and usually stop after SADL
          generates the required database query.
        </p>

        <p>
          Modify operations are more complex because they involve business
          behavior, validations, determinations and transactional consistency.
        </p>
      </ContentSection>

      <ArchitectNote>
        <p>
          Understanding RAP Runtime is often the difference between a RAP
          developer and a RAP architect.
        </p>

        <p>
          Architects must understand how Gateway, OData, SADL, RAP Runtime,
          Transaction Manager and SAP HANA interact because performance,
          scalability and troubleshooting depend on this knowledge.
        </p>

        <p>
          When analyzing performance issues, authorization failures, unexpected
          validations or save sequence behavior, the answer is usually found
          somewhere within the RAP Runtime flow.
        </p>
      </ArchitectNote>

      <ContentSection title="Clean Core, Released APIs and the Future of ABAP Development">
        <p>
          One of the biggest shifts from Classical ABAP development to ABAP
          Cloud development is SAP's move toward the <strong>Clean Core</strong>{" "}
          strategy.
        </p>

        <p>
          In the past, developers could directly access SAP database tables,
          call unreleased function modules, use implicit enhancements and even
          modify SAP standard code. While this provided flexibility, it created
          significant challenges during upgrades because custom code became
          tightly coupled to SAP internals.
        </p>

        <p>
          ABAP Cloud introduces a clear contract between SAP standard software
          and customer extensions. This contract is enforced through Released
          APIs, Released Extension Points and the ABAP Language Version
          <strong> ABAP for Cloud Development</strong>.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/ABAP Cloud Development Model CloudABAP.com.png"
        alt="ABAP Cloud Development Model"
        caption="ABAP Cloud Development Model and Clean Core Architecture"
      />

      <InfoBox type="success" title="What is Clean Core?">
        <p>
          Clean Core means keeping SAP standard software untouched while
          extending it only through officially released APIs and extension
          points.
        </p>

        <p>
          The goal is to make custom developments upgrade-safe, cloud-ready,
          scalable and compatible with future SAP innovations.
        </p>

        <p>
          Clean Core is not just a recommendation. It is the foundation of SAP
          S/4HANA Public Cloud and ABAP Cloud development.
        </p>
      </InfoBox>

      <RealWorldExample title="Classical ABAP vs Clean Core">
        <p>In traditional ECC systems developers frequently used:</p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Direct SELECT from MARA</li>
          <li>Calls to unreleased Function Modules</li>
          <li>Implicit Enhancements</li>
          <li>Modifications of SAP Standard Programs</li>
          <li>Direct Updates to SAP Tables</li>
        </ul>

        <p className="mt-4">
          In ABAP Cloud these approaches are forbidden because SAP cannot
          guarantee upgrade stability when custom code depends on SAP internals.
        </p>
      </RealWorldExample>

      <ContentSection title="Released APIs - The New Contract with SAP">
        <p>
          SAP now exposes business data and functionality through
          <strong> Released APIs</strong>.
        </p>

        <p>
          Released APIs form the official public interface between SAP standard
          software and customer developments.
        </p>

        <p>
          SAP guarantees lifecycle stability for released APIs while retaining
          the freedom to change internal implementation details.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Examples of Released APIs">
        <ul className="list-disc pl-6 space-y-2">
          <li>Released CDS Views (I_* views)</li>
          <li>Released ABAP Classes</li>
          <li>Released Interfaces</li>
          <li>Released RAP Business Objects</li>
          <li>Released OData APIs</li>
          <li>Released BAdIs and Extension Points</li>
        </ul>
      </InfoBox>

      <CodeBlock
        title="Allowed - Released CDS View"
        code={`SELECT *
  FROM I_Product
  INTO TABLE @DATA(lt_product).`}
      />

      <CodeBlock
        title="Not Allowed - Direct SAP Table Access"
        code={`SELECT *
  FROM MARA
  INTO TABLE @DATA(lt_mara).`}
      />

      <ArchitectNote>
        <p>Notice that both statements may technically return Material data.</p>

        <p>
          However, I_Product is a released public API whereas MARA is an
          internal SAP implementation table. SAP may change MARA at any time
          without impacting customers using the released CDS View.
        </p>
      </ArchitectNote>

      <ContentSection title="ABAP Language Version and Enforcement">
        <p>
          The Clean Core strategy is enforced technically through the ABAP
          Language Version <strong>ABAP for Cloud Development</strong>.
        </p>

        <p>
          This language version performs syntax checks and release checks during
          development and activation.
        </p>

        <p>
          If a developer attempts to use a non-released SAP object, activation
          fails immediately.
        </p>
      </ContentSection>

      <InfoBox type="warning" title="Typical Syntax Errors in ABAP Cloud">
        <ul className="list-disc pl-6 space-y-2">
          <li>Direct SELECT from SAP tables such as MARA</li>
          <li>CALL SCREEN</li>
          <li>Classic Dynpro Programming</li>
          <li>Web Dynpro ABAP Development</li>
          <li>EXEC SQL</li>
          <li>OPEN DATASET</li>
          <li>SYSTEM-CALL</li>
          <li>SELECT CLIENT SPECIFIED</li>
          <li>Calls to unreleased SAP Function Modules</li>
        </ul>
      </InfoBox>

      <ContentSection title="What is Allowed in ABAP Cloud?">
        <ul className="list-disc pl-6 space-y-2">
          <li>RAP Applications</li>
          <li>CDS View Entities</li>
          <li>Released CDS Views</li>
          <li>Released ABAP Classes</li>
          <li>Released APIs from SAP</li>
          <li>Custom Database Tables</li>
          <li>ABAP OO Development</li>
          <li>Background Jobs through released APIs</li>
          <li>Application Logging APIs</li>
          <li>Business Events</li>
          <li>OData Service Consumption</li>
        </ul>
      </ContentSection>

      <ContentSection title="What is NOT Allowed in ABAP Cloud?">
        <ul className="list-disc pl-6 space-y-2">
          <li>Modifications of SAP Standard Objects</li>
          <li>Implicit Enhancements</li>
          <li>Direct Access to SAP Internal Tables</li>
          <li>Unreleased Function Modules</li>
          <li>Classic Dynpro Screens</li>
          <li>CALL SCREEN</li>
          <li>Direct Database Access Bypassing Released APIs</li>
          <li>EXEC SQL</li>
          <li>File System Access via OPEN DATASET</li>
          <li>Native Database Programming</li>
        </ul>
      </ContentSection>

      <RealWorldExample title="The Famous MARA Example">
        <p>A classic ABAP developer might write:</p>

        <CodeBlock
          title="Legacy ABAP"
          code={`SELECT * FROM mara INTO TABLE @DATA(lt_mara).`}
        />

        <p>
          In ABAP Cloud this causes a syntax error because MARA is not released.
        </p>

        <p>The correct approach is:</p>

        <CodeBlock
          title="ABAP Cloud"
          code={`SELECT *
  FROM I_Product
  INTO TABLE @DATA(lt_product).`}
        />
      </RealWorldExample>

      <ContentSection title="The Three-Tier Extensibility Model">
        <p>
          SAP introduced the Three-Tier Model to help customers gradually move
          toward Clean Core.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Tier 1 - ABAP Cloud">
        Fully cloud-compliant developments using only released APIs.
      </InfoBox>

      <InfoBox type="warning" title="Tier 2 - Wrapper Layer">
        Encapsulates non-released APIs behind custom wrappers. This acts as a
        transition layer during modernization.
      </InfoBox>

      <InfoBox type="warning" title="Tier 3 - Classical ABAP">
        Legacy developments that directly depend on SAP internals.
      </InfoBox>

      <ArchitectNote>
        <p>
          SAP's long-term strategy is to move custom developments from Tier 3 to
          Tier 1. Every new development should ideally start directly in Tier 1.
        </p>

        <p>
          Architects should treat Tier 2 as a temporary migration layer rather
          than a permanent architecture.
        </p>
      </ArchitectNote>

      <ContentSection title="RAP Fundamentals Interview Questions">
        <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          RAP Fundamentals
        </h3>

        <InterviewQuestion
          level="Architect"
          question="Why did SAP introduce RAP when Gateway and BOPF already existed?"
          answer="SAP required a unified cloud-ready programming model that combines data modeling, transactional behavior, service exposure and Clean Core principles within a single framework."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is RAP considered the future of ABAP development?"
          answer="Because RAP combines CDS, business behavior, service exposure, draft handling, authorization, OData integration and cloud compliance into a single standardized framework aligned with SAP's Clean Core strategy."
        />

        <InterviewQuestion
          level="Architect"
          question="Why should architects care about RAP?"
          answer="RAP is not just a development framework. It is SAP's strategic architecture for cloud-ready applications and is foundational to ABAP Cloud, Clean Core and future S/4HANA extensibility."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the relationship between RAP and ABAP Cloud?"
          answer="ABAP Cloud is the overall development model. RAP is the transactional application framework within ABAP Cloud used to implement Business Objects and services."
        />

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Business Objects & Data Modeling
        </h3>

        <InterviewQuestion
          level="Architect"
          question="Why is RAP considered a Business Object-centric framework?"
          answer="RAP models business processes around Business Objects instead of database tables, enabling lifecycle management, transactional consistency and reusable business behavior."
        />

        <InterviewQuestion
          level="Architect"
          question="Can every Transactional RAP application be converted into a Read-Only application?"
          answer="Yes. Transactional RAP is essentially a Read-Only RAP application with additional behavior and lifecycle management. Removing behavior artifacts leaves the underlying analytical model intact."
        />

        <InterviewQuestion
          level="Architect"
          question="How do you decide whether to use an Association or a Composition?"
          answer="If the child entity depends on the parent for its lifecycle and business existence, use Composition. If both entities can exist independently, use Association."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the difference between a BAPI call and EML?"
          answer="BAPIs expose procedural operations while EML operates directly on RAP Business Objects and automatically respects RAP transactional behavior, validations, determinations and authorizations."
        />

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Managed vs Unmanaged RAP
        </h3>

        <InterviewQuestion
          level="Architect"
          question="Why does SAP recommend Managed RAP for new developments?"
          answer="Managed RAP reduces custom code, automatically handles persistence and transactional processing, aligns with Clean Core principles and provides better upgrade stability in ABAP Cloud environments."
        />

        <InterviewQuestion
          level="Architect"
          question="When would you intentionally choose Unmanaged RAP?"
          answer="When significant business logic already exists in BAPIs, function modules or legacy frameworks and rewriting that logic would be expensive or risky."
        />

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          RAP Runtime & Processing
        </h3>

        <InterviewQuestion
          level="Architect"
          question="What happens internally when a user clicks Save in a RAP application?"
          answer="The request flows through OData, SAP Gateway, SADL and the RAP Runtime. Validations, determinations, actions and authorization checks are executed before the Transaction Manager commits changes to SAP HANA."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the role of SADL in RAP?"
          answer="SADL translates service requests into CDS operations, optimizes database access and generates efficient SAP HANA queries."
        />

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Clean Core & ABAP Cloud
        </h3>

        <InterviewQuestion
          level="Architect"
          question="Why is direct access to MARA forbidden in ABAP Cloud?"
          answer="Because MARA is an internal SAP implementation table and not a released API. SAP only guarantees lifecycle stability for released APIs such as I_Product."
        />

        <InterviewQuestion
          level="Architect"
          question="What are the two main objectives of the ABAP Language Version?"
          answer="Protect system integrity through restricted syntax and enforce Clean Core by allowing access only to released APIs."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the difference between Tier 1 and Tier 2 in SAP's Three-Tier Model?"
          answer="Tier 1 uses only released APIs and is fully cloud compliant. Tier 2 encapsulates non-released APIs behind custom wrappers to support gradual modernization."
        />
      </ContentSection>

      <ContentSection title="Official SAP References">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <a
              href="https://help.sap.com/docs/abap-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ABAP Cloud Documentation (SAP Help Portal)
            </a>
          </li>

          <li>
            <a
              href="https://help.sap.com/docs/abap-cloud/abap-restful-application-programming-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ABAP RESTful Application Programming Model (RAP) Documentation
            </a>
          </li>

          <li>
            <a
              href="https://developers.sap.com/tutorials/abap-environment-restful-programming-model.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SAP Developers Tutorial - Get to Know RAP
            </a>
          </li>

          <li>
            <a
              href="https://community.sap.com/t5/technology-blog-posts-by-sap/abap-cloud-what-is-it/ba-p/13537488"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ABAP Cloud - What Is It? (SAP Community)
            </a>
          </li>

          <li>
            <a
              href="https://community.sap.com/t5/technology-blog-posts-by-sap/embedded-steampunk-some-more-details-for-abap-developers/ba-p/13528370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Embedded Steampunk - Details for ABAP Developers
            </a>
          </li>
        </ul>
      </ContentSection>

      <PrevNext
        nextTitle="Understanding RAP Architecture"
        nextHref="/tutorials/rap/fundamentals/rap-architecture"
      />
    </TutorialLayout>
  );
}
