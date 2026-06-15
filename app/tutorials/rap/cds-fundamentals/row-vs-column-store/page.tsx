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

export default function RowVsColumnStorePage() {
  return (
    <TutorialLayout
      title="Row Store vs Column Store: The Secret Behind SAP HANA Performance"
      category="CDS Fundamentals"
      duration="15 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="Row Store vs Column Store">
        <p>
          One of the biggest innovations introduced by SAP HANA is its extensive
          use of <strong>Column Store</strong> technology.
        </p>

        <p>
          Traditional databases primarily store data in a row-based format,
          while SAP HANA uses a column-based storage model for most business
          application data.
        </p>

        <p>
          Although both approaches store the same information, the way data is
          physically organized has a significant impact on performance.
        </p>

        <p>
          Understanding the difference between Row Store and Column Store helps
          explain why SAP HANA can execute CDS queries, analytics, and
          aggregations much faster than traditional databases.
        </p>
      </ContentSection>

      <ImageBlock
        priority
        src="/images/rap/cds-fundamentals/Row Store vs Column Store CloudABAP.com.webp"
        alt="Row Store vs Column Store"
        caption="SAP HANA primarily uses Column Store to accelerate analytics, aggregations and CDS processing."
      />

      <ContentSection title="Understanding Row-Based Storage">
        <p>
          In a Row Store database, all values belonging to a record are stored
          together.
        </p>

        <p>Consider the following employee data:</p>

        <TableBlock
          title="Employee Data"
          headers={["Employee ID", "Name", "Department", "Salary"]}
          rows={[
            ["1001", "John", "Finance", "80000"],
            ["1002", "Sarah", "Sales", "70000"],
            ["1003", "David", "Finance", "85000"],
          ]}
        />

        <p>A Row Store saves the data as:</p>

        <ul>
          <li>1001 | John | Finance | 80000</li>
          <li>1002 | Sarah | Sales | 70000</li>
          <li>1003 | David | Finance | 85000</li>
        </ul>

        <p>
          Each row is stored sequentially. When the database retrieves a
          complete record, Row Store performs very efficiently because all
          required values are physically located together.
        </p>
      </ContentSection>

      <ContentSection title="Advantages and Limitations of Row Store">
        <p>Row Store works particularly well for transactional processing.</p>

        <p>Advantages include:</p>

        <ul>
          <li>Efficient single-record lookups</li>
          <li>Fast inserts and updates</li>
          <li>Suitable for transactional processing</li>
          <li>Ideal for configuration and master data tables</li>
        </ul>

        <p>
          Problems arise when applications need only a few columns from very
          large tables.
        </p>

        <p>
          Consider the query:
          <strong> SELECT SUM( Salary )</strong>
        </p>

        <p>
          Even though only one column is required, the database still scans
          every row and reads unnecessary data.
        </p>

        <p>As datasets grow larger, this becomes increasingly inefficient.</p>
      </ContentSection>

      <ContentSection title="Understanding Column-Based Storage">
        <p>
          In a Column Store database, values belonging to the same column are
          stored together.
        </p>

        <p>The same employee data is organized as:</p>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold border-b">
                  Employee ID
                </th>
                <th className="px-4 py-3 text-left font-semibold border-b">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-semibold border-b">
                  Department
                </th>
                <th className="px-4 py-3 text-left font-semibold border-b">
                  Salary
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-4 py-2">1001</td>
                <td className="px-4 py-2">John</td>
                <td className="px-4 py-2">Finance</td>
                <td className="px-4 py-2">80000</td>
              </tr>

              <tr>
                <td className="px-4 py-2">1002</td>
                <td className="px-4 py-2">Sarah</td>
                <td className="px-4 py-2">Sales</td>
                <td className="px-4 py-2">70000</td>
              </tr>

              <tr>
                <td className="px-4 py-2">1003</td>
                <td className="px-4 py-2">David</td>
                <td className="px-4 py-2">Finance</td>
                <td className="px-4 py-2">85000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Each column is stored independently.</p>

        <p>
          This structure allows SAP HANA to read only the columns required by a
          query.
        </p>

        <ArchitectNote>
          In a Column Store database, SAP HANA physically stores all values of a
          column together. For example, all Salary values are stored together,
          all Department values are stored together, and so on.
          <br />
          <br />
          Therefore, when a CDS query requests only Salary data, SAP HANA can
          read just the Salary column without scanning Names, Departments, or
          Employee IDs.
        </ArchitectNote>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/Row and Column Table Storage Pattern.webp"
          alt="Row Store vs Column Store Table"
          caption="Row Store vs Column Store Table"
        />

        <p>
          Suppose a report needs:
          <strong> SELECT SUM( Salary )</strong>
        </p>

        <p>SAP HANA reads only the Salary column.</p>

        <p>It does not need to read:</p>

        <ul>
          <li>Employee IDs</li>
          <li>Names</li>
          <li>Departments</li>
        </ul>

        <p>This significantly reduces the amount of data processed.</p>
      </ContentSection>

      <ContentSection title="Why Column Store Is Perfect for CDS">
        <p>Most CDS Views are used for:</p>

        <ul>
          <li>Reporting</li>
          <li>Analytics</li>
          <li>Dashboards</li>
          <li>Aggregations</li>
          <li>Search Scenarios</li>
          <li>Fiori Applications</li>
        </ul>

        <p>
          These use cases typically access only a subset of available columns.
        </p>

        <p>
          Because SAP HANA can read only the required columns, CDS queries
          execute far more efficiently than traditional row-based approaches.
        </p>

        <p>
          This is one of the key reasons SAP selected Column Store as the
          default storage model for SAP HANA business data.
        </p>
      </ContentSection>

      <TableBlock
        title="Row Store vs Column Store Comparison"
        headers={["Characteristic", "Row Store", "Column Store"]}
        rows={[
          [
            "Data Organization",
            "Complete records together",
            "Values grouped by column",
          ],
          ["Single Record Access", "Excellent", "Good"],
          ["Aggregations", "Slower", "Very Fast"],
          ["Analytics", "Limited", "Excellent"],
          ["Compression", "Lower", "Higher"],
          ["CDS Performance", "Moderate", "Optimized"],
        ]}
      />
      <RealWorldExample title="Purchase Register Application">
        <p>Consider a Purchase Register containing 50 million records.</p>

        <p>A finance user wants to calculate:</p>

        <ul>
          <li>Total Tax Amount</li>
          <li>Total Invoice Value</li>
          <li>Total Taxable Value</li>
        </ul>

        <p>Only three columns are needed.</p>

        <h4 className="font-semibold text-lg mt-6 mb-3">Row Store Database</h4>

        <ul>
          <li>Every row must be scanned.</li>
          <li>Unnecessary columns are read.</li>
          <li>More data must be processed.</li>
        </ul>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          SAP HANA Column Store
        </h4>

        <ul>
          <li>Only the required columns are accessed.</li>
          <li>Aggregations execute directly on those columns.</li>
          <li>Processing time is significantly reduced.</li>
        </ul>

        <p>The result is faster reporting and better scalability.</p>
      </RealWorldExample>

      <ContentSection title="When Does SAP HANA Use Row Store?">
        <p>
          Although Column Store is the primary storage format, SAP HANA still
          supports Row Store.
        </p>

        <p>Typical examples include:</p>

        <ul>
          <li>Technical Tables</li>
          <li>Configuration Tables</li>
          <li>Small Lookup Tables</li>
          <li>Frequently Updated Tables</li>
        </ul>

        <p>
          These scenarios benefit from Row Store's efficient write performance.
        </p>

        <p>SAP HANA therefore combines the strengths of both storage models.</p>
      </ContentSection>

      <ArchitectNote>
        Column Store is one of the most important reasons CDS performs so well
        on SAP HANA.
        <br />
        <br />
        CDS queries frequently execute aggregations, filters, joins and
        analytical calculations against large datasets. Column Store minimizes
        unnecessary data reads and enables SAP HANA to process only the relevant
        business information.
        <br />
        <br />
        Understanding Column Store is essential for architects designing
        scalable RAP, Embedded Analytics and Fiori applications.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is the primary difference between Row Store and Column Store?"
          answer="Row Store stores complete records together, whereas Column Store stores values of the same column together."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is Column Store faster for analytical queries?"
          answer="Column Store reads only the required columns instead of entire rows, significantly reducing data access and improving aggregation performance."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is Column Store important for CDS performance?"
          answer="Most CDS queries involve filtering, aggregations, analytics and reporting scenarios. Column Store enables SAP HANA to process only relevant columns, reducing I/O and maximizing Code Pushdown efficiency."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          Traditional databases optimize for storing complete records, whereas
          SAP HANA Column Store optimizes for processing business information.
        </p>

        <p>
          Because CDS queries typically access only a subset of columns and
          perform aggregations, Column Store enables SAP HANA to process large
          datasets dramatically faster than traditional row-based databases.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Evolution from Traditional Databases to SAP HANA In-Memory Computing"
        prevHref="/tutorials/rap/cds-fundamentals/sap-hana-evolution"
        nextTitle="Data Compression in SAP HANA"
        nextHref="/tutorials/rap/cds-fundamentals/hana-compression"
      />
    </TutorialLayout>
  );
}
