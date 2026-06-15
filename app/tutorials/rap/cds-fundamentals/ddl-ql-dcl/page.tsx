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

export default function Page() {
  return (
    <TutorialLayout
      title="CDS Language Components: Understanding DDL, QL, and DCL"
      category="CDS Fundamentals"
      duration="12 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="Understanding DDL, QL, and DCL">
        <p>
          Core Data Services (CDS) is often described as an extension of SQL.
        </p>

        <p>
          While this description is technically correct, CDS provides much more
          than traditional SQL.
        </p>

        <p>
          CDS introduces a collection of domain-specific languages that allow
          developers to define data models, query data, and control data access
          within a single framework.
        </p>

        <p>
          These language components work together to create secure, reusable,
          and semantically rich business models.
        </p>

        <p>The three primary CDS language categories are:</p>

        <ul>
          <li>Data Definition Language (DDL)</li>
          <li>Query Language (QL)</li>
          <li>Data Control Language (DCL)</li>
        </ul>

        <p>
          Understanding these components is important because they form the
          foundation of modern SAP application development.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/Anatomy of CDS View CloudABAP.com.webp"
          alt="CDS Language Components"
          caption="DDL, QL, and DCL work together to create secure and reusable business models."
        />
      </ContentSection>

      <ContentSection title="Data Definition Language (DDL)">
        <p>
          Data Definition Language (DDL) is used to create and define CDS
          entities.
        </p>

        <p>
          Whenever developers create a CDS View Entity, they are working with
          DDL.
        </p>

        <p>DDL is responsible for describing:</p>

        <ul>
          <li>Business Entities</li>
          <li>Fields</li>
          <li>Associations</li>
          <li>Compositions</li>
          <li>Calculated Elements</li>
          <li>Annotations</li>
          <li>Semantic Relationships</li>
        </ul>

        <p>
          Rather than thinking in terms of database tables, DDL encourages
          developers to model business objects.
        </p>
      </ContentSection>

      <RealWorldExample title="Sales Order Business Object">
        <p>Consider a Sales Order business object.</p>

        <p>Using DDL, a developer can define:</p>

        <ul>
          <li>Sales Order Header</li>
          <li>Sales Order Items</li>
          <li>Customer Information</li>
          <li>Product Information</li>
        </ul>

        <p>along with the relationships between these entities.</p>

        <p>
          The resulting CDS model becomes the foundation for reports, APIs, RAP
          applications, and Fiori applications.
        </p>
      </RealWorldExample>

      <ContentSection title="Why DDL Matters">
        <p>
          DDL allows SAP developers to build a reusable semantic layer above
          database tables.
        </p>

        <p>
          Instead of repeatedly implementing joins and calculations, business
          structures are modeled once and reused throughout the system.
        </p>
      </ContentSection>

      <ContentSection title="Query Language (QL)">
        <p>
          Query Language (QL) is responsible for retrieving and processing data
          from CDS entities.
        </p>

        <p>
          It provides SQL-like capabilities while taking advantage of SAP HANA's
          processing engine.
        </p>

        <p>QL supports:</p>

        <ul>
          <li>Filtering</li>
          <li>Sorting</li>
          <li>Aggregations</li>
          <li>Grouping</li>
          <li>Calculated Fields</li>
          <li>Expressions</li>
        </ul>

        <p>
          Although developers may not directly interact with QL every day, it
          powers the execution of CDS queries behind the scenes.
        </p>
      </ContentSection>

      <RealWorldExample title="Revenue Analytics Application">
        <p>A finance application may need to retrieve:</p>

        <ul>
          <li>Total Revenue</li>
          <li>Total Tax Amount</li>
          <li>Monthly Sales Figures</li>
        </ul>

        <p>
          Instead of processing this data on the application server, QL allows
          SAP HANA to perform these calculations directly within the database.
        </p>

        <p>The application receives only the final result.</p>
      </RealWorldExample>

      <ContentSection title="Why QL Matters">
        <p>QL is one of the key enablers of the Code Pushdown paradigm.</p>

        <p>
          It allows business calculations to execute where the data resides
          rather than transferring large datasets to ABAP programs.
        </p>
      </ContentSection>

      <ContentSection title="Data Control Language (DCL)">
        <p>
          Data Control Language (DCL) provides authorization and security
          capabilities for CDS models.
        </p>

        <p>
          While DDL defines what data exists and QL retrieves the data, DCL
          determines who can access the data.
        </p>

        <p>
          DCL allows developers to implement row-level security directly at the
          CDS layer.
        </p>

        <p>
          This means access restrictions are enforced regardless of the
          consuming application.
        </p>
      </ContentSection>

      <RealWorldExample title="Purchase Register Authorization">
        <p>Consider a Purchase Register application.</p>

        <p>
          A purchasing manager may be allowed to view purchase orders belonging
          only to a specific purchasing organization.
        </p>

        <p>
          Instead of implementing authorization checks separately in every
          report, API, or application, DCL can enforce the restriction
          centrally.
        </p>

        <p>
          Any application consuming the CDS entity automatically inherits the
          same security rules.
        </p>
      </RealWorldExample>

      <ContentSection title="Why DCL Matters">
        <p>Security implemented at the CDS layer provides:</p>

        <ul>
          <li>Consistent Authorization Behavior</li>
          <li>Reduced Development Effort</li>
          <li>Improved Maintainability</li>
          <li>Better Compliance</li>
        </ul>

        <p>
          This is one of the major advantages of CDS compared to traditional
          database views.
        </p>
      </ContentSection>

      <ContentSection title="How DDL, QL, and DCL Work Together">
        <p>
          The three language components are designed to complement each other.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">DDL</h3>

        <p>Defines the business data model.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">QL</h3>

        <p>Retrieves and processes the data.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">DCL</h3>

        <p>Controls who can access the data.</p>

        <p>
          Together they provide a complete framework for modern enterprise
          application development.
        </p>

        <p>
          Instead of treating data modeling, querying, and security as separate
          concerns, CDS brings them together within a unified architecture.
        </p>
      </ContentSection>

      <ContentSection title="CDS Beyond Traditional SQL">
        <p>Traditional SQL focuses primarily on data retrieval.</p>

        <p>CDS extends this concept by adding:</p>

        <ul>
          <li>Business Semantics</li>
          <li>Associations</li>
          <li>Compositions</li>
          <li>Annotations</li>
          <li>Metadata</li>
          <li>Security</li>
          <li>Service Consumption Capabilities</li>
        </ul>

        <p>
          This is one of the reasons why CDS has become the strategic foundation
          for SAP S/4HANA, RAP, Embedded Analytics, and SAP Fiori.
        </p>
      </ContentSection>

      <TableBlock
        title="Understanding CDS Language Components"
        headers={["Language", "Purpose", "Example"]}
        rows={[
          [
            "DDL",
            "Define business entities and relationships",
            "Sales Order CDS View Entity",
          ],
          [
            "QL",
            "Retrieve and process business data",
            "Revenue Aggregation Query",
          ],
          [
            "DCL",
            "Control access to data",
            "Purchase Organization Authorization",
          ],
        ]}
      />

      <ArchitectNote>
        <h3>Architect Insight</h3>
        <p>
          Many developers initially think CDS is simply a modern replacement for
          database views.
        </p>
        <p>
          In reality, CDS combines data modeling, data processing, and security
          within a single framework.
        </p>
        <p>
          This is why CDS serves as the foundation for RAP Business Objects,
          Fiori applications, OData services, Embedded Analytics, and SAP APIs.
        </p>
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What are the three primary language components of CDS?"
          answer="The three primary CDS language components are Data Definition Language (DDL), Query Language (QL), and Data Control Language (DCL)."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the role of DCL in CDS?"
          answer="DCL provides authorization and security capabilities. It allows developers to implement row-level security directly at the CDS layer so that access restrictions are consistently enforced across all consuming applications."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is CDS considered more than just a replacement for database views?"
          answer="CDS combines semantic data modeling, business relationships, query capabilities, metadata annotations, security, service exposure, analytics, and RAP integration within a single framework. Traditional database views primarily focus on data retrieval."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>CDS consists of three major language components:</p>

        <ul>
          <li>DDL for defining business entities and data models.</li>
          <li>QL for querying and processing data.</li>
          <li>DCL for implementing security and access control.</li>
        </ul>

        <p>
          Together they create a complete framework for building reusable,
          secure, and high-performance business applications in SAP S/4HANA and
          RAP.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="CDS, Open SQL, and AMDP"
        prevHref="/tutorials/rap/cds-fundamentals/cds-opensql-amdp"
        nextTitle="Virtual Data Model (VDM)"
        nextHref="/tutorials/rap/cds-fundamentals/virtual-data-model"
      />
    </TutorialLayout>
  );
}
