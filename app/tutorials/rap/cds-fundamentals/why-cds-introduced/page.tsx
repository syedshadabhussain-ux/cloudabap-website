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

export default function WhyCDSIntroducedPage() {
  return (
    <TutorialLayout
      title="Why SAP Introduced CDS and the Code Pushdown Paradigm"
      category="CDS Fundamentals"
      duration="15 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="CDS and the Code Pushdown Paradigm">
        <p>
          Before SAP HANA, most business applications followed a traditional
          <strong> Data-to-Code</strong> architecture.
        </p>

        <p>
          In this model, the database was primarily responsible for storing and
          retrieving data, while the majority of business processing happened on
          the ABAP Application Server.
        </p>

        <p>A typical application would:</p>

        <ol>
          <li>Read large datasets from one or more database tables.</li>
          <li>Transfer data from the database to the application server.</li>
          <li>Store the data in internal tables.</li>
          <li>
            Execute joins, loops, calculations, filtering, and aggregations in
            ABAP.
          </li>
          <li>Return the final result to the user.</li>
        </ol>

        <p>
          This approach worked well when databases were disk-based and data
          volumes were relatively small.
        </p>

        <p>
          However, modern enterprise systems process millions of business
          transactions every day. As data volumes increased, moving large
          datasets between the database and application server became
          increasingly expensive.
        </p>

        <p>The result was:</p>

        <ul>
          <li>Higher network traffic</li>
          <li>Increased memory consumption</li>
          <li>Longer response times</li>
          <li>Poor scalability for analytical and reporting scenarios</li>
        </ul>

        <p>
          SAP needed a new approach that would allow calculations to be executed
          closer to the data rather than transferring massive datasets to the
          application server.
        </p>

        <p>
          This led to the introduction of the <strong>Code Pushdown</strong>{" "}
          paradigm.
        </p>
      </ContentSection>

      <ImageBlock
        priority
        src="/images/rap/cds-fundamentals/Why CDS Intrduced CloudABAP.com .webp"
        alt="Why SAP Introduced CDS and the Code Pushdown Paradigm"
        caption="CDS enables Code Pushdown by moving business logic closer to SAP HANA."
      />

      <ContentSection title="From Data-to-Code to Code-to-Data">
        <p>The core idea behind Code Pushdown is simple:</p>

        <p>
          <strong>
            Move the code to the data instead of moving the data to the code.
          </strong>
        </p>

        <p>
          Rather than fetching millions of records into ABAP and processing them
          there, SAP HANA performs the calculations directly inside the
          database.
        </p>

        <p>Only the final result is sent back to the application server.</p>

        <p>
          This architectural shift is commonly known as moving from{" "}
          <strong>Data-to-Code Architecture</strong> to{" "}
          <strong>Code-to-Data Architecture</strong>.
        </p>

        {/* <ul>
          <li>Data-to-Code Architecture</li>
          <li>Code-to-Data Architecture</li>
        </ul> */}

        <p>
          The amount of transferred data is drastically reduced, resulting in
          better performance and improved scalability.
        </p>
      </ContentSection>

      <ContentSection title="How CDS Enables Code Pushdown">
        <p>
          Core Data Services (CDS) became SAP's strategic technology for
          implementing Code Pushdown.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/Code Pushdown CloudABAP.com.webp"
          alt="Why SAP Introduced CDS and the Code Pushdown Paradigm"
          caption="CDS enables Code Pushdown by moving business logic closer to SAP HANA."
        />

        <p>CDS allows developers to define:</p>

        <ul>
          <li>Joins</li>
          <li>Associations</li>
          <li>Calculated Fields</li>
          <li>Aggregations</li>
          <li>Filters</li>
          <li>Access Controls</li>
        </ul>

        <p>directly at the database layer.</p>

        <p>
          Instead of writing complex ABAP loops and calculations, developers can
          model the logic once in CDS and let SAP HANA execute it efficiently.
        </p>

        <p>
          This allows applications to fully leverage the power of the SAP HANA
          database.
        </p>
      </ContentSection>

      <RealWorldExample title="Purchase Register Application">
        <p>
          Consider a Purchase Register application containing several million
          invoice records.
        </p>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          In a Traditional ABAP Approach
        </h4>

        <ul>
          <li>Purchase documents are read into internal tables.</li>
          <li>Vendor information is joined in ABAP.</li>
          <li>GST calculations are performed inside loops.</li>
          <li>
            Totals and summaries are calculated on the application server.
          </li>
          <li>The final report is generated and displayed.</li>
        </ul>

        <p>
          As the volume of data grows, the report becomes slower because a large
          amount of data must travel between the database and application
          server.
        </p>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          Using CDS-Based Approach
        </h4>

        <ul>
          <li>Database joins execute directly inside SAP HANA.</li>
          <li>Calculated fields are evaluated at the database layer.</li>
          <li>Aggregations are performed by the HANA engine.</li>
          <li>Only the final summarized result is returned.</li>
        </ul>

        <p>
          The application transfers significantly less data and executes much
          faster, especially for large datasets.
        </p>
      </RealWorldExample>

      <ContentSection title="CDS Is Not the Only Code Pushdown Technology">
        <p>SAP provides three major technologies that support Code Pushdown:</p>

        <div className="mt-5">
          <p className="font-bold text-lg text-slate-800">
            Core Data Services (CDS)
          </p>

          <p>
            Used for semantic data modeling, calculations, associations,
            annotations, and service consumption.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold text-lg text-slate-800">Enhanced Open SQL</p>

          <p>
            Modern ABAP SQL syntax that enables database-intensive operations
            directly within ABAP programs.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold text-lg text-slate-800">
            ABAP Managed Database Procedures (AMDP)
          </p>

          <p>
            Used when advanced SAP HANA-specific logic needs to be implemented
            using SQLScript.
          </p>
        </div>

        <p className="mt-5">
          Together, CDS, Open SQL, and AMDP form the foundation of SAP's Code
          Pushdown strategy.
        </p>
      </ContentSection>

      <TableBlock
        title="Code Pushdown Technologies Comparison"
        headers={["Technology", "Purpose", "Typical Usage"]}
        rows={[
          [
            "CDS",
            "Semantic Data Modeling",
            "Associations, Annotations, RAP, OData Exposure",
          ],
          [
            "Open SQL",
            "Database Operations from ABAP",
            "Reads, Joins, Filtering and Aggregations",
          ],
          [
            "AMDP",
            "Advanced SAP HANA Logic",
            "SQLScript Procedures and Complex Processing",
          ],
        ]}
      />

      <ArchitectNote>
        SAP did not introduce CDS merely to replace database views. CDS was
        introduced as a strategic semantic modeling layer that enables SAP HANA
        to execute business logic closer to the data.
        <br />
        <br />
        Successful SAP S/4HANA and RAP architectures minimize data movement and
        maximize database-side processing. Architects should always evaluate
        whether calculations, joins, aggregations, and filters can be pushed
        down to CDS before implementing them in ABAP code.
      </ArchitectNote>

      <ContentSection title="Interview Quenstions">
        <InterviewQuestion
          level="Beginner"
          question="Why did SAP introduce CDS when ABAP Open SQL already existed?"
          answer="Open SQL primarily retrieves and manipulates data, whereas CDS provides a semantic modeling layer that supports associations, annotations, access control, calculations, analytics, OData consumption, and code pushdown."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between Data-to-Code and Code-to-Data architectures?"
          answer="In Data-to-Code architectures, large datasets are transferred to the application server where processing occurs. In Code-to-Data architectures, calculations execute directly inside SAP HANA and only the final result is transferred, significantly improving performance and scalability."
        />

        <InterviewQuestion
          level="Architect"
          question="When should CDS, Open SQL, and AMDP be used in a Code Pushdown strategy?"
          answer="CDS should be used for semantic data modeling and reusable business views, Open SQL for database-intensive operations within ABAP programs, and AMDP when advanced SAP HANA-specific logic requires SQLScript capabilities that CDS and Open SQL cannot provide."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          The primary reason CDS was introduced was to leverage the processing
          power of SAP HANA and reduce unnecessary data movement between the
          database and application server.
        </p>

        <p>
          By moving calculations closer to the data, CDS enables faster
          applications, better scalability, reduced network overhead, and a
          modern architecture that serves as the foundation of SAP S/4HANA and
          RAP.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="What Are Core Data Services (CDS)?"
        prevHref="/tutorials/rap/cds-fundamentals/what-is-cds"
        nextTitle="Evolution from Traditional Databases to SAP HANA In-Memory Computing"
        nextHref="/tutorials/rap/cds-fundamentals/sap-hana-evolution"
      />
    </TutorialLayout>
  );
}
