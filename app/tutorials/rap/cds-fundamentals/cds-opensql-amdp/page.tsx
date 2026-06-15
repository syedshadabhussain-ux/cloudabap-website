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
      title="CDS, Open SQL, and AMDP: The Three Pillars of Code Pushdown"
      category="CDS Fundamentals"
      duration="15 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="CDS, Open SQL, and AMDP">
        <p>
          The introduction of SAP HANA fundamentally changed how ABAP
          applications are developed.
        </p>

        <p>
          In traditional ABAP systems, most calculations, aggregations, and
          business processing were executed on the application server. SAP HANA
          introduced the ability to execute these operations directly at the
          database layer through the Code Pushdown paradigm.
        </p>

        <p>To enable this approach, SAP provides three primary technologies:</p>

        <ul>
          <li>Core Data Services (CDS)</li>
          <li>Enhanced Open SQL</li>
          <li>ABAP Managed Database Procedures (AMDP)</li>
        </ul>

        <p>
          Together, these technologies form the foundation of modern SAP
          application development.
        </p>

        <p>
          Each technology serves a different purpose and should be used in the
          appropriate scenario.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/cds-openaql-amdp abapcloud.com.webp"
          alt="CDS Open SQL and AMDP"
          caption="CDS, Open SQL, and AMDP form the three primary technologies that enable Code Pushdown in SAP HANA."
        />
      </ContentSection>

      <ContentSection title="Understanding the Code Pushdown Toolbox">
        <p>
          Think of CDS, Open SQL, and AMDP as three tools available to an ABAP
          developer.
        </p>

        <p>
          Just as a carpenter uses different tools for different tasks, SAP
          developers choose between CDS, Open SQL, and AMDP depending on the
          complexity and requirements of the solution.
        </p>

        <p>The goal is not to use the most powerful tool.</p>

        <p>
          The goal is to use the simplest tool that solves the problem
          efficiently.
        </p>
      </ContentSection>

      <ContentSection title="Core Data Services (CDS)">
        <p>CDS is SAP's strategic data modeling framework.</p>

        <p>
          It is the preferred technology whenever business data needs to be
          modeled, reused, secured, exposed, or consumed by applications.
        </p>

        <p>CDS is commonly used for:</p>

        <ul>
          <li>RAP Business Objects</li>
          <li>Fiori Elements Applications</li>
          <li>OData Services</li>
          <li>Embedded Analytics</li>
          <li>Reporting Applications</li>
          <li>APIs</li>
        </ul>

        <p>CDS allows developers to define:</p>

        <ul>
          <li>Business Entities</li>
          <li>Associations</li>
          <li>Compositions</li>
          <li>Calculated Fields</li>
          <li>Aggregations</li>
          <li>Access Controls</li>
          <li>Metadata Annotations</li>
        </ul>

        <p>all within a single semantic data model.</p>

        <p>
          Because CDS is reusable, multiple applications can consume the same
          CDS entity without duplicating logic.
        </p>
      </ContentSection>

      <RealWorldExample title="Sales Order Business Object">
        <p>Consider a Sales Order business object.</p>

        <p>
          Instead of repeatedly joining VBAK, VBAP, KNA1, and other related
          tables in multiple programs, a CDS View Entity can model the complete
          Sales Order structure once.
        </p>

        <p>The same CDS entity can then be reused by:</p>

        <ul>
          <li>RAP Applications</li>
          <li>Fiori Apps</li>
          <li>OData Services</li>
          <li>Reports</li>
          <li>APIs</li>
        </ul>

        <p>This promotes consistency and reduces maintenance effort.</p>
      </RealWorldExample>

      <ContentSection title="Enhanced Open SQL">
        <p>
          Open SQL is the standard database access layer used within ABAP
          programs.
        </p>

        <p>
          Over the years SAP significantly enhanced Open SQL to support many
          database-side operations that previously required ABAP processing.
        </p>

        <p>Modern Open SQL supports:</p>

        <ul>
          <li>SQL Expressions</li>
          <li>CASE Statements</li>
          <li>Aggregations</li>
          <li>Joins</li>
          <li>Subqueries</li>
          <li>UNION Operations</li>
        </ul>

        <p>
          This allows developers to push more processing to the database while
          remaining entirely within ABAP code.
        </p>
      </ContentSection>

      <ContentSection title="When Should You Use Open SQL?">
        <p>Open SQL is ideal when:</p>

        <ul>
          <li>Logic is specific to a single ABAP program.</li>
          <li>Reusability is not required.</li>
          <li>A full CDS model would be unnecessary.</li>
          <li>Database access is relatively simple.</li>
        </ul>
      </ContentSection>

      <RealWorldExample title="Custom Purchase Order Report">
        <p>
          A custom report may need to calculate open purchase orders for a
          specific business process.
        </p>

        <p>
          If the logic is only required in that report and will not be reused
          elsewhere, Open SQL may be sufficient.
        </p>

        <p>
          Creating a dedicated CDS entity could introduce unnecessary
          complexity.
        </p>
      </RealWorldExample>

      <ContentSection title="ABAP Managed Database Procedures (AMDP)">
        <p>
          AMDP is the most powerful Code Pushdown technology available to ABAP
          developers.
        </p>

        <p>
          AMDP allows developers to write database procedures directly using SAP
          HANA SQLScript while integrating them seamlessly into ABAP
          applications.
        </p>

        <p>
          AMDP is typically used when requirements exceed the capabilities of
          CDS and Open SQL.
        </p>

        <p>Examples include:</p>

        <ul>
          <li>Complex Calculations</li>
          <li>Advanced Algorithms</li>
          <li>Predictive Logic</li>
          <li>Specialized SAP HANA Functions</li>
          <li>High-Performance Data Transformations</li>
        </ul>

        <p>
          Because AMDP is database-specific, it should generally be considered
          the last option after evaluating CDS and Open SQL.
        </p>
      </ContentSection>

      <RealWorldExample title="Financial Forecasting Application">
        <p>
          A financial forecasting application may require advanced statistical
          calculations that cannot be expressed efficiently using CDS or Open
          SQL.
        </p>

        <p>
          In such cases, AMDP allows developers to execute the logic directly
          inside SAP HANA using SQLScript.
        </p>
      </RealWorldExample>

      <ContentSection title="Choosing the Right Technology">
        <p>
          A common mistake among developers is assuming that AMDP should always
          be used because it provides the highest level of control.
        </p>

        <p>SAP recommends the opposite approach.</p>

        <p>
          Start with the simplest option and move to more advanced technologies
          only when necessary.
        </p>

        <p>The general recommendation is:</p>

        <ol>
          <li>CDS</li>
          <li>Open SQL</li>
          <li>AMDP</li>
        </ol>

        <p>If a requirement can be solved using CDS, use CDS.</p>

        <p>If CDS is not sufficient, consider Open SQL.</p>

        <p>
          Only use AMDP when neither CDS nor Open SQL can efficiently solve the
          problem.
        </p>
      </ContentSection>

      <ContentSection title="Why CDS Is SAP's Strategic Choice">
        <p>
          Although all three technologies support Code Pushdown, CDS has become
          SAP's preferred development model.
        </p>

        <p>This is because CDS provides far more than database access.</p>

        <p>CDS combines:</p>

        <ul>
          <li>Data Modeling</li>
          <li>Business Semantics</li>
          <li>Security</li>
          <li>Metadata</li>
          <li>Service Consumption</li>
          <li>RAP Integration</li>
        </ul>

        <p>into a single framework.</p>

        <p>
          This makes CDS the foundation of modern SAP application development.
        </p>

        <p>
          Most new SAP innovations, including RAP and Fiori Elements, are built
          on top of CDS.
        </p>
      </ContentSection>

      <TableBlock
        title="CDS vs Open SQL vs AMDP"
        headers={["Feature", "CDS", "Open SQL", "AMDP"]}
        rows={[
          [
            "Primary Purpose",
            "Data Modeling",
            "Program Database Access",
            "Advanced Database Logic",
          ],
          ["Reusable", "Yes", "No", "Limited"],
          ["Annotations", "Yes", "No", "No"],
          ["RAP Compatible", "Yes", "Indirect", "No"],
          ["OData Exposure", "Yes", "No", "No"],
          ["Complex Algorithms", "Limited", "Limited", "Excellent"],
          ["Recommended Priority", "1st Choice", "2nd Choice", "Last Choice"],
        ]}
      />

      <ArchitectNote>
        <h3>Architect Insight</h3>
        A common misconception is that AMDP is always the fastest option.
        <br />
        <br />
        In reality, SAP recommends using the highest-level abstraction possible.
        <br />
        <br />
        CDS should be your first choice because it provides semantic modeling,
        security, annotations, service consumption, and RAP integration in
        addition to database access.
        <br />
        <br />
        AMDP should be used only when CDS and Open SQL cannot efficiently
        express the required logic.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What are the three primary technologies used for Code Pushdown in SAP HANA?"
          answer="The three primary Code Pushdown technologies are Core Data Services (CDS), Enhanced Open SQL, and ABAP Managed Database Procedures (AMDP)."
        />

        <InterviewQuestion
          level="Experienced"
          question="When should Open SQL be preferred over CDS?"
          answer="Open SQL is ideal when the logic is specific to a single ABAP program, does not require reuse, and does not justify creating a dedicated CDS model."
        />

        <InterviewQuestion
          level="Architect"
          question="When should you choose AMDP over CDS?"
          answer="AMDP should only be used when the requirement cannot be efficiently implemented using CDS or Open SQL. Examples include advanced SAP HANA SQLScript functionality, complex calculations, predictive algorithms, or specialized performance-critical processing."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          CDS, Open SQL, and AMDP are complementary technologies that enable
          Code Pushdown in SAP HANA.
        </p>

        <p>
          CDS should be the default choice for data modeling and application
          development because it provides business semantics, security,
          annotations, service consumption, and RAP integration.
        </p>

        <p>
          Open SQL is ideal for program-specific database operations, while AMDP
          should be reserved for advanced scenarios that require direct access
          to SAP HANA SQLScript capabilities.
        </p>

        <p>
          Choosing the simplest technology that efficiently solves the problem
          is one of the most important design principles for SAP developers and
          architects.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Parallel Processing in SAP HANA"
        prevHref="/tutorials/rap/cds-fundamentals/parallel-processing"
        nextTitle="CDS Language Components: Understanding DDL, QL, and DCL"
        nextHref="/tutorials/rap/cds-fundamentals/ddl-ql-dcl"
      />
    </TutorialLayout>
  );
}
